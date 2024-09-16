import "./catalog.css";

import product_2 from "../../img/product-2.png";
import test1 from "../../img/test1.jpg";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { userSlice } from "../../store/reducers/UserSlice";

export const Catalog = () => {
  const [choosenFilters, setChoosenFilters] = useState([]);
  const user = userSlice.actions.usersFetchingSuccess({
    id: 1,
    email: "dfasd",
    firstname: "fa",
    lastname: "fa",
  });
  console.log(user);
  const dispatch = useAppDispatch();

  // console.log(items);
  // константа со значением категорий фильтров и самих фильтров в массив это записывать и при обновлении стейта посылать запрос на бэк с обновленным массивом

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="container">
        <div className="catalog__content grid">
          <div className="catalog__column">
            <div className="filters">
              <div className="filters__item">
                <div className="filters__title">Product type</div>
                <div className="filters__content">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      value={"furniture"}
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Furniture</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Homeware</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Sofas</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">
                      Light fittings
                    </span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Accessories</span>
                  </label>
                </div>
              </div>
              <div className="filters__item">
                <div className="filters__title">Price</div>
                <div className="filters__content">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">0 - 100</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">101 - 250</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">250+</span>
                  </label>
                </div>
              </div>
              <div className="filters__item">
                <div className="filters__title">Designer</div>
                <div className="filters__content">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Robert Smith</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">
                      Liam Gallagher
                    </span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Biggie Smalls</span>
                  </label>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="furniture"
                      className="custom-checkbox__input"
                    />
                    <span className="custom-checkbox__icon"></span>
                    <span className="custom-checkbox__text">Thom Yorke</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog__wrapper">
            {/* {items.length > 0 ? (
              <>
                <ul className="catalog__products">
                  <li className="catalog__item">
                    <article className="product">
                      <div className="product__img">
                        <img
                          src={test1}
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
                  <li className="catalog__item">
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
                  <li className="catalog__item">
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
                  <li className="catalog__item">
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
                  <li className="catalog__item">
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
                </ul>
                <div className="centered">
                  <button className="btn btn-theme_light">Load more</button>
                </div>
              </>
            ) : (
              <div>Предметы не загрузились</div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};
