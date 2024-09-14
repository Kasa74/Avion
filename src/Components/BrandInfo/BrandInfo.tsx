import "./brandInfo.css";

import brandInfo_img from "../../img/brandInfo.jpg";
import { Link } from "react-router-dom";

export const BrandInfo = () => {
  return (
    <section className="brandInfo">
      <div className="container">
        <div className="brandInfo__content">
          <div className="brandInfo__text">
            <h2 className="brandInfo__title">It started with a small idea</h2>
            <p className="brandInfo__description">
              A&nbsp;global brand with local beginnings, our story begain
              in&nbsp;a&nbsp;small studio in&nbsp;South London in&nbsp;early
              2014
            </p>
            <Link to={"/catalog"} className="btn btn-theme_transparency">
              View collection
            </Link>
          </div>
          <div className="brandInfo__img__block">
            <img
              width="630px"
              height="478px"
              src={brandInfo_img}
              alt="img"
              className="brandInfo__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
