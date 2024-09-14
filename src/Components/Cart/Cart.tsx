import "./cart.css";

import product_img from "../../img/product_img_1.jpg";
import { useState } from "react";

export const Cart = () => {
  const [quantityAmmount, setQuantityAmmount] = useState(1);

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
            <div className="cart__row cart-grid">
              <div className="cart__col cart__col--img">
                <img
                  src={product_img}
                  alt=""
                  width="109px"
                  height="134px"
                  className="cart__img"
                />
              </div>
              <div className="cart__col cart__col--info">
                <div className="cart__info">
                  <h2 className="cart__title">Graystone vase</h2>
                  <p className="cart__description">
                    A timeless ceramic vase with a tri color grey glaze.
                  </p>
                  <p className="cart__price">£85</p>
                </div>
              </div>
              <div className="cart__col cart__col--quantity">
                <div className="cart__stepper">
                  <button
                    className="cart__stepper__btn cart__stepper__btn-minus"
                    aria-label="decrease quantity"
                    onClick={() => quantityMinus()}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantityAmmount}
                    onChange={(e) => setQuantityAmmount(Number(e.target.value))}
                    className="cart__stepper__input"
                  />
                  <button
                    className="cart__stepper__btn cart__stepper__btn-plus"
                    aria-label="increase quantity"
                    onClick={() => quantityPlus()}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart__col cart__col--total">
                <p className="cart__total">$85</p>
              </div>
            </div>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-info">
              <p className="cart__bottom-text">
                Taxes and shipping are calculated at&nbsp;checkout{" "}
              </p>
              <div className="cart__subtotal">
                Subtotal <span className="cart__subtotal-price">£210</span>
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
