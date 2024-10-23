import { useState } from "react";
import "./newsLetter.css";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form__input"
              placeholder="your@email.com"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(email);
                setEmail("");
              }}
              className="btn btn-theme_dark form__btn"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
