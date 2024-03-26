import React from "react";

function prewButton(props) {
  const { isHidden, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={isHidden ? "prewButton prewButton_hidden" : "prewButton"}
    >
      назад
    </button>
  );
}

export default prewButton;
