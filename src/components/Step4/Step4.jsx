import React from "react";
import FinishButton from "../FinishButton/FinishButton";

function Step4(props) {
  const { setStep } = props;

  return (
    <div className="mm-finish">
      <img
        src={process.env.PUBLIC_URL + "/img/error.svg"}
        alt=""
        className="mm-finish__logo"
      />
      <div className="mm-finish__text1 mm-finish__text1_red">Ошибка</div>
      <div className="mm-finish__text2">
        Вы уже подавали заявку с указанными данными ранее. Если хотите внести
        изменения в отправленную заявку, напишите на почту:{" "}
        <a href="mailto:EliseevaSA@mos.ru">EliseevaSA@mos.ru</a>
      </div>
      <FinishButton
        disabled={false}
        onClick={() => setStep(1)}
        text="вернуться к форме"
        className="mm-finish__tg"
      />
    </div>
  );
}

export default Step4;
