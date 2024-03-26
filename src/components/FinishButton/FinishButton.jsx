import React from "react";

function FinishButton(props) {
  const { type, disabled, onClick, text, className } = props;

  return (
    <button
      disabled={disabled}
      className={className ? `finishButton ${className}` : "finishButton"}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default FinishButton;
