import "./aboutHistory.css";

import about_img from "../../img/aboutHistory.jpg";
import { Link } from "react-router-dom";

export const AboutHistory = () => {
  return (
    <section className="aboutHistory">
      <div className="aboutHistory__content">
        <div className="aboutHistory__info">
          <h2 className="title title--small aboutHistory__title">
            From a&nbsp;studio in&nbsp;London to&nbsp;a&nbsp;global brand with
            over 400 outlets
          </h2>
          <p className="aboutHistory__description">
            When we&nbsp;started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="aboutHistory__description">
            Handmade, and lovingly crafted furniture and homeware is&nbsp;what
            we&nbsp;live, breathe and design so&nbsp;our Chelsea boutique become
            the hotbed for the London interior design community.
          </p>
          <Link
            to={"/catalog"}
            className="btn btn-theme_light aboutHistory__btn"
          >
            Get in touch
          </Link>
        </div>
        <img
          src={about_img}
          width="720"
          height="603"
          className="aboutHistory__img"
          alt="about"
        />
      </div>
    </section>
  );
};
