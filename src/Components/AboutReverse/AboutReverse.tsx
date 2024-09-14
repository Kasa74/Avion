import "./aboutReverse.css";
import aboutReverse_img from "../../img/aboutReverse.jpg";
import { Link } from "react-router-dom";

export const AboutReverse = () => {
  return (
    <section className="aboutReverse">
      <div className="aboutReverse__content">
        <img
          src={aboutReverse_img}
          alt=""
          width="720"
          height="603"
          className="aboutReverse__img"
        />
        <div className="aboutReverse__info">
          <h2 className="title aboutReverse__title">
            Our service isn&rsquo;t just personal, it&rsquo;s actually hyper
            personally exquisite
          </h2>
          <p className="aboutReverse__description">
            When we&nbsp;started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>

          <p className="aboutReverse__description">
            Handmade, and lovingly crafted furniture and homeware is&nbsp;what
            we&nbsp;live, breathe and design so&nbsp;our Chelsea boutique become
            the hotbed for the London interior design community.
          </p>
          <Link
            to={"/catalog"}
            className="btn btn-theme_white aboutReverse__btn"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};
