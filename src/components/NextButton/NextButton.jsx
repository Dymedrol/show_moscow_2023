import React from "react";

function NextButton(props) {
  const { type, disabled, onClick, text } = props;

  return (
    <button
      disabled={disabled}
      className="nextButton"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default NextButton;
