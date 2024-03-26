import React from "react";

function Step3() {
  return (
    <div className="mm-finish">
      <img
        src={process.env.PUBLIC_URL + "/img/finish.svg"}
        alt=""
        className="mm-finish__logo"
      />
      <div className="mm-finish__text1">Спасибо!</div>
      <div className="mm-finish__text2">Ваша заявка принята!</div>
    </div>
  );
}

export default Step3;
