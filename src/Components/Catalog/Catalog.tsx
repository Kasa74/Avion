import "./catalog.css";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchItems } from "../../store/reducers/ActionCreators";
import { Link } from "react-router-dom";

interface filtersType {
  [key: string]: any[];
}

export const Catalog = () => {
  const [choosenFilters, setChoosenFilters] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(
    (state) => state.itemsReducer
  );

  const filters: filtersType = {
    "Product Type": [
      "Furniture",
      "Homeware",
      "Sofa",
      "Light fittings",
      "Accessories",
    ],
    Price: ["0 - 100", "101 - 250", "250+"],
    Designer: ["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"],
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // константа со значением категорий фильтров и самих фильтров в массив это записывать и при обновлении стейта посылать запрос на бэк с обновленным массивом

  const filterClick = (choosen_filter: string) => {
    const filterIndex = choosenFilters.findIndex(
      (filter) => filter === choosen_filter
    );

    const updatedFilters = [...choosenFilters];

    if (filterIndex !== -1) {
      updatedFilters.splice(filterIndex, 1);
      setChoosenFilters(updatedFilters);
    } else {
      updatedFilters.push(choosen_filter);
      setChoosenFilters(updatedFilters);
    }
  };

  const filteredItems = items.filter((item) => {
    if (choosenFilters.length === 0) {
      return true;
    } else {
      return (
        choosenFilters.includes(item.designer) ||
        choosenFilters.includes(item.category)
      );
    }
  });

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="container">
        <div className="catalog__content grid">
          <div className="catalog__column">
            <div className="filters">
              <div className="filters__item">
                {Object.keys(filters).map((filters_title) => {
                  return (
                    <>
                      <div className="filters__title">{filters_title}</div>
                      <div className="filters__content">
                        {filters[filters_title].map((filter) => {
                          return (
                            <label
                              key={filter}
                              onClick={() => {
                                filterClick(filter);
                              }}
                              className="custom-checkbox"
                            >
                              <input
                                onClick={(e) => e.stopPropagation()}
                                type="checkbox"
                                value={filter}
                                name={filter}
                                className="custom-checkbox__input"
                              />
                              <span className="custom-checkbox__icon"></span>
                              <span className="custom-checkbox__text">
                                {filter}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="catalog__wrapper">
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
                  onClick={() => dispatch(fetchItems())}
                  className="btn btn-theme_dark error__btn"
                >
                  Try again
                </div>
              </div>
            )}
            {filteredItems.length === 0 && (
              <div className="products__not-found">
                <div className="">Products with this filters not found</div>
                <div className="">Change the filters</div>
              </div>
            )}
            <ul className="catalog__products">
              {Array.isArray(filteredItems) &&
                !isLoading &&
                filteredItems.map((item) => {
                  return (
                    <li key={item.id} className="catalog__item">
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
                            <Link
                              to={`/item${"/" + item.id}`}
                              className="product__link"
                            >
                              {item.name}
                            </Link>
                          </h3>
                          <span className="product__price">{item.price}£</span>
                        </div>
                      </article>
                    </li>
                  );
                })}
            </ul>
            {!error && !isLoading && filteredItems.length > 0 && (
              <div className="centered">
                <button className="btn btn-theme_light">Load more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
