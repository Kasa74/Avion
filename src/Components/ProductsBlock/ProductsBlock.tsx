import "./productsBlock.css";

// img
import product_1 from "../../img/product-1.png";
import product_2 from "../../img/product-2.png";
import product_3 from "../../img/product-3.png";
import product_4 from "../../img/product-4.png";
import { Link } from "react-router-dom";

export const ProductsBlock = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="title title--large title--mb-small">New ceramics</h2>
        <ul className="grid products__list">
          <li className="products__item">
            <article className="product">
              <div className="product__img">
                <img
                  src={product_1}
                  aria-hidden="true"
                  width="305"
                  height="375"
                  loading="lazy"
                  alt="product"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">
                  <a href="" className="product__link">
                    The Dandy chair
                  </a>
                </h3>
                <span className="product__price">£250</span>
              </div>
            </article>
          </li>

          <li className="products__item">
            <article className="product">
              <div className="product__img">
                <img
                  src={product_2}
                  aria-hidden="true"
                  width="305"
                  height="375"
                  loading="lazy"
                  alt="product"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">
                  <a href="" className="product__link">
                    Rustic Vase Set
                  </a>
                </h3>
                <span className="product__price">£155</span>
              </div>
            </article>
          </li>
          <li className="products__item">
            <article className="product">
              <div className="product__img">
                <img
                  src={product_3}
                  aria-hidden="true"
                  width="305"
                  height="375"
                  loading="lazy"
                  alt="product"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">
                  <a href="" className="product__link">
                    The Silky Vase
                  </a>
                </h3>
                <span className="product__price">£125</span>
              </div>
            </article>
          </li>
          <li className="products__item">
            <article className="product">
              <div className="product__img">
                <img
                  src={product_4}
                  aria-hidden="true"
                  width="305"
                  height="375"
                  loading="lazy"
                  alt="product"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">
                  <a href="" className="product__link">
                    The Lucy Lamp
                  </a>
                </h3>
                <span className="product__price">£399</span>
              </div>
            </article>
          </li>
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
