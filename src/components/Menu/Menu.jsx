import React from "react";

function Menu() {
  return (
    <div className="mm-menu">
      <div className="mm-menu__wrapper">
        <a href="https://www.mos.ru/tourism/" target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Menu;
