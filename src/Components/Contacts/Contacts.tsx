import "./contacts.css";

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__content">
          <div className="text__block">
            <h2 className="contacts__title">Our contact number:</h2>
            <p className="contacts__description">+234567534</p>
          </div>
          <div className="text__block">
            <h2 className="contacts__title">Our mail:</h2>
            <p className="contacts__description">avion@mail.net</p>
          </div>
        </div>
      </div>
    </section>
  );
};
