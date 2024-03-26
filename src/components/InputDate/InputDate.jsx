import React from "react";
import InputMask from "react-input-mask";

function InputDate(props) {
  const { title, placeholder, error, onChange, value, mask, name, helpText } =
    props;

  return (
    <div className="mm-form__item">
      <div className="form__item-input-textarea-title-wrapper">
        <div className="form__item-title">{title}</div>
        <div className="form__item-subtitle">{helpText}</div>
      </div>

      <InputMask
        mask={mask}
        value={value}
        placeholder={placeholder}
        className="mm-form__text-input"
        onChange={(e) => onChange(e.target.value)}
        name={name}
      ></InputMask>

      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputDate;
