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
  const [howMuchLoad, setHowMuchLoad] = useState(6);
  const [filtersMobActive, setFiltersMobActive] = useState(true);
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

  const windowResize = () => {
    if (window.innerWidth < 768) {
      setFiltersMobActive(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFiltersMobActive(false);
    }
    window.addEventListener("window_resize", windowResize);

    return () => {
      window.removeEventListener("window_resize", windowResize);
    };
  }, []);

  useEffect(() => {
    if (howMuchLoad !== items.length) {
      dispatch(fetchItems(howMuchLoad));
    }
  }, [dispatch, howMuchLoad, items]);

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
            <button
              className={`btn btn-theme_light catalog__btn ${
                filtersMobActive ? "active" : ""
              }`}
              onClick={() => setFiltersMobActive(!filtersMobActive)}
            >
              Filters
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="16"
                  height="16"
                  transform="translate(0.5)"
                  fill="white"
                />
                <path d="M12.5 6L8.5 11L4.5 6H12.5Z" fill="#2A254B" />
              </svg>
            </button>
            <div className={`filters ${filtersMobActive ? "active" : ""}`}>
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
            {error && (
              <div className="error__block">
                <div className="error__text">{error}</div>
                <div
                  onClick={() => dispatch(fetchItems(howMuchLoad))}
                  className="btn btn-theme_dark error__btn"
                >
                  Try again
                </div>
              </div>
            )}
            {filteredItems.length === 0 && !isLoading && (
              <div className="products__not-found">
                <div>Products with this filters not found</div>
                <div>Change the filters</div>
              </div>
            )}
            <ul className="catalog__products">
              {Array.isArray(filteredItems) &&
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
            {!error &&
              !isLoading &&
              filteredItems.length > 0 &&
              howMuchLoad === items.length && (
                <div className="centered">
                  <button
                    className="btn btn-theme_light"
                    onClick={() => setHowMuchLoad(howMuchLoad + 6)}
                  >
                    Load more
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};
