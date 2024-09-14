import "./newsLetter.css";

export const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h2 className="title newsletter__title">
            Join the club and get the benefits
          </h2>
          <p className="newsletter__description">
            Sign up&nbsp;for our newsletter and receive exclusive offers
            on&nbsp;new ranges, sales, pop up&nbsp;stores and more
          </p>
          <form className="form newsletter__form">
            <input
              type="email"
              name="email"
              required
              className="form__input"
              placeholder="your@email.com"
            />
            <button className="btn btn-theme_dark form__btn">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
};
