import "./cart.css";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { cartSlice } from "../../store/reducers/CartSlice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isLoading, error } = useAppSelector(
    (state) => state.cartReducer
  );

  const [localCounts, setLocalCounts] = useState(
    cartItems.map((item) => item.count)
  );

  const inputChangeHandler = (index: number, value: number) => {
    const newLocalCounts = [...localCounts];
    newLocalCounts[index] = Number(value);
    setLocalCounts(newLocalCounts);
  };

  const plusButtonHandler = (index: number) => {
    const newLocalCounts = [...localCounts];
    newLocalCounts[index] += 1;
    setLocalCounts(newLocalCounts);
  };

  const minusButtonHandler = (index: number) => {
    const newLocalCounts = [...localCounts];
    newLocalCounts[index] -= 1;
    setLocalCounts(newLocalCounts);
  };
  return (
    <section className="cart">
      <h1 className="visually-hidden">Cart</h1>
      <div className="container">
        <div className="cart__content">
          <div className="cart__table">
            <div className="cart__row cart__row--heading cart-grid">
              <div className="cart__col">Product</div>
              <div className="cart__col cart__col--quantity">Quantity</div>
              <div className="cart__col cart__col--total">Total</div>
            </div>
            {cartItems.length === 0 && (
              <div className="cart__empty">Cart is empty</div>
            )}
            <div className="cart__row cart-grid">
              {Array.isArray(cartItems) &&
                cartItems.map((cartItem, index) => {
                  return (
                    <>
                      <div className="cart__col cart__col--img">
                        <img
                          src={cartItem.img}
                          alt=""
                          width="109px"
                          height="134px"
                          className="cart__img"
                        />
                      </div>
                      <div className="cart__col cart__col--info">
                        <div className="cart__info">
                          <h2 className="cart__title">{cartItem.name}</h2>
                          <p className="cart__description">
                            {cartItem.description}
                          </p>
                          <p className="cart__price">£{cartItem.price}</p>
                        </div>
                      </div>
                      <div className="cart__col cart__col--quantity">
                        <div className="cart__stepper">
                          <button
                            className="cart__stepper__btn cart__stepper__btn-minus"
                            aria-label="decrease quantity"
                            onClick={() => {
                              minusButtonHandler(index);
                              dispatch(
                                cartSlice.actions.cartItemMinus(cartItem)
                              );
                            }}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={localCounts[index]}
                            onChange={(e) =>
                              inputChangeHandler(index, Number(e.target.value))
                            }
                            onBlur={() =>
                              dispatch(
                                cartSlice.actions.setCartItemCount({
                                  ...cartItem,
                                  count: localCounts[index],
                                })
                              )
                            }
                            className="cart__stepper__input"
                          />
                          <button
                            className="cart__stepper__btn cart__stepper__btn-plus"
                            aria-label="increase quantity"
                            onClick={() => {
                              plusButtonHandler(index);
                              dispatch(
                                cartSlice.actions.cartItemPlus(cartItem)
                              );
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart__col cart__col--total">
                        <p className="cart__total">
                          ${cartItem.price * cartItem.count}
                        </p>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-info">
              <p className="cart__bottom-text">
                Taxes and shipping are calculated at&nbsp;checkout
              </p>
              <div className="cart__subtotal">
                Subtotal{" "}
                <span className="cart__subtotal-price">
                  £
                  {cartItems.reduce(
                    (acc, curValue) => acc + curValue.count * curValue.price,
                    0
                  )}
                </span>
              </div>
            </div>

            <div className="cart__btn-wrapper">
              <button className="btn btn-theme_dark">Go to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
