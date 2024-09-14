import { Link } from "react-router-dom";
import hero_image from "../../img/hero_image.jpg";
import "./heroBlock.css";

export const HeroBlock = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                The furniture brand for the future, with timeless designs
              </h1>
              <Link
                to={"/catalog"}
                className="btn btn-theme_transparency hero__link"
              >
                View collection
              </Link>
              <p className="hero__description">
                A&nbsp;new era in&nbsp;eco friendly furniture with Avelon, the
                French luxury retail brand with nice fonts, tasteful colors and
                a&nbsp;beautiful way to&nbsp;display things digitally using
                modern web technologies.
              </p>
            </div>
            <img
              src={hero_image}
              alt="chair"
              width="520"
              height="584"
              className="hero__image"
            ></img>
          </div>
        </div>
      </section>
    </main>
  );
};
