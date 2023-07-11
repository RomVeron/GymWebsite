import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={trainerImg} alt="" />
          </div>
          <div className="start__content">
            <h2 className="section__title">
              Ready to make a <spam className="highlights">change?</spam>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium labore ipsam amet nam cumque temporibus quas iste.
              Nulla eaque reiciendis omnis ducimus cumque minus dolore. Maxime
              nulla beatae ipsam voluptatem?
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
