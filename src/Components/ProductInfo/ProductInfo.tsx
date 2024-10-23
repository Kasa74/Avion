import "./productInfo.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchOneItem } from "../../store/reducers/ActionCreators";
import { cartSlice } from "../../store/reducers/CartSlice";
import { SkeletonCard } from "../SkeletonCard/SkeletonCard";

export const ProductInfo = () => {
  const [quantityAmmount, setQuantityAmmount] = useState(1);

  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(
    (state) => state.itemsReducer
  );
  const { id } = useParams();

  const selectedItem = items.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!selectedItem && items.length === 0) {
      dispatch(fetchOneItem(Number(id)));
    }
  }, [selectedItem, items.length, id, dispatch]);

  const quantityMinus = () => {
    if (quantityAmmount > 0) {
      setQuantityAmmount(quantityAmmount - 1);
    } else {
      alert("Заказать меньше нельзя");
    }
  };

  const quantityPlus = () => {
    if (quantityAmmount < 999) {
      setQuantityAmmount(quantityAmmount + 1);
    } else {
      alert("Выбрано максимальное количество единиц товара");
    }
  };

  return (
    <section className="productInfo">
      <div className="container">
        <div className="productInfo__content">
          {isLoading && <SkeletonCard count={1} />}
          {selectedItem?.category && (
            <>
              <div className="productInfo__img">
                <img
                  src={selectedItem?.img}
                  width="607px"
                  height="661px"
                  alt="product_1"
                />
              </div>
              <div className="productInfo__text">
                <div className="productInfo__top">
                  <h1 className="productInfo__title">{selectedItem?.name}</h1>
                  <div className="productInfo__price">
                    £{selectedItem?.price}
                  </div>
                </div>
                <div className="productInfo__item">
                  <h2 className="productInfo__subtitle">Product description</h2>
                  <p className="productInfo__description">
                    A&nbsp;timeless design, with premium materials features
                    as&nbsp;one of&nbsp;our most popular and iconic pieces. The
                    dandy chair is&nbsp;perfect for any stylish living space
                    with beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="productInfo__item">
                  <h2 className="productInfo__subtitle">Dimensions</h2>
                  <dl className="productInfo__chars">
                    <div className="productInfo__chars-item">
                      <dt className="productInfo__chars-caption">Height</dt>
                      <dd className="productInfo__chars-text">
                        {selectedItem.height}cm
                      </dd>
                    </div>
                    <div className="productInfo__chars-item">
                      <dt className="productInfo__chars-caption">Width</dt>
                      <dd className="productInfo__chars-text">
                        {selectedItem.width}cm
                      </dd>
                    </div>
                    <div className="productInfo__chars-item">
                      <dt className="productInfo__chars-caption">Depth</dt>
                      <dd className="productInfo__chars-text">
                        {selectedItem.depth}cm
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="productInfo__item">
                  <h2 className="productInfo__subtitle">Quantity</h2>
                  <div className="stepper">
                    <button
                      className="stepper__btn stepper__btn-minus"
                      aria-label="decrease quantity"
                      onClick={() => quantityMinus()}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantityAmmount}
                      onChange={(e) =>
                        setQuantityAmmount(Number(e.target.value))
                      }
                      className="stepper__input"
                    />
                    <button
                      className="stepper__btn stepper__btn-plus"
                      aria-label="increase quantity"
                      onClick={() => quantityPlus()}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="productInfo__buttons">
                  <button
                    onClick={() =>
                      dispatch(
                        cartSlice.actions.cartAddItem({
                          ...selectedItem,
                          count: quantityAmmount,
                        })
                      )
                    }
                    className="btn btn-theme_dark"
                  >
                    Add to cart
                  </button>
                  <button className="btn btn-theme_white">
                    Save to favorites
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
