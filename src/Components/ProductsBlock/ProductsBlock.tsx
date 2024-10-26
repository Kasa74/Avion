import "./productsBlock.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { fetchItems } from "../../store/reducers/ActionCreators";

export const ProductsBlock = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(
    (state) => state.itemsReducer
  );

  useEffect(() => {
    if (items.length < 4) {
      dispatch(fetchItems(4));
    }
  }, [dispatch, items]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="title title--large title--mb-small">New ceramics</h2>
        {isLoading && (
          <div className="loading">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {error && (
          <div className="error__block">
            <div className="error__text">{error}</div>
            <div
              onClick={() => dispatch(fetchItems(4))}
              className="btn btn-theme_dark error__btn"
            >
              Try again
            </div>
          </div>
        )}
        <ul className="grid products__list">
          {items.slice(0, 4).map((item) => (
            <li className="products__item">
              <article className="product">
                <div className="product__img">
                  <img
                    src={item.img}
                    aria-hidden="true"
                    width="305"
                    height="375"
                    loading="lazy"
                    alt="product"
                  />
                </div>
                <div className="product__content">
                  <h3 className="product__title">
                    <Link to={`/item/${item.id}`} className="product__link">
                      {item.name}
                    </Link>
                  </h3>
                  <span className="product__price">£{item.price}</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="centered">
          <Link to={"/catalog"} className="btn btn-theme_light products__btn">
            View collection
          </Link>
        </div>
      </div>
    </section>
  );
};
