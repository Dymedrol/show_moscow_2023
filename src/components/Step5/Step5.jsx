import React from "react";

function Step5() {
  return (
    <div className="mm-finish">
      <img
        src={process.env.PUBLIC_URL + "/img/error.svg"}
        alt=""
        className="mm-finish__logo"
      />
      <div className="mm-finish__text2">
        К сожалению, срок подачи заявок на конкурс закончен. Следите за
        новостями на <a href="https://travelhub.moscow/showmoscow">сайте</a>
      </div>
    </div>
  );
}

export default Step5;
