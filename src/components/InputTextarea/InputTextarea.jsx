import React from "react";

function InputTextarea(props) {
  const {
    title,
    subTitle,
    placeholder,
    error,
    onChange,
    value,
    maxlength,
    name,
  } = props;

  return (
    <div className="mm-form__item">
      <div className="form__item-input-textarea-title-wrapper">
        <div className="form__item-title">{title}</div>
        <div className="form__item-subtitle">{subTitle}</div>
      </div>
      <textarea
        className="mm-form__text-textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxlength}
        name={name}
      />
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputTextarea;
