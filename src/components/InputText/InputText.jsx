import React from "react";

function InputText(props) {
  const {
    title,
    placeholder,
    error,
    type,
    onChange,
    value,
    name,
    helpText,
    maxLength,
    flat,
  } = props;

  return (
    <div className="mm-form__item">
      <div className="form__item-input-textarea-title-wrapper">
        <div className="form__item-title">{title}</div>
        <div className="form__item-subtitle">{helpText}</div>
      </div>
      <input
        type={type ? type : "text"}
        className={`mm-form__text-input ${flat && "mm-form__text-input_flat"}`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        name={name}
        maxLength={maxLength}
      />
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputText;
