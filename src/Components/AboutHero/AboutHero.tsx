import { Link } from "react-router-dom";
import "./aboutHero.css";

export const AboutHero = () => {
  return (
    <section className="aboutHero">
      <div className="container">
        <div className="aboutHero__content">
          <h1 className="title aboutHero__title">
            A&nbsp;brand built on&nbsp;the love of&nbsp;craftmanship, quality
            and outstanding customer service
          </h1>
          <Link to={"/catalog"} className="btn btn-theme_light">
            View our products
          </Link>
        </div>
      </div>
    </section>
  );
};
