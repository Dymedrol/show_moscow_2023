import React from "react";

function InputRadio(props) {
  const {
    title,
    choices,
    name,
    onChange,
    isGorizontal,
    error,
    value,
    mobileColumn,
  } = props;

  return (
    <div className="mm-form__item">
      <div className="form__item-title form__item-input-radio-title">
        {title}
      </div>
      <div
        className={`${
          isGorizontal
            ? "form__item-input-radio-items_horizontal"
            : "form__item-input-radio-items"
        } ${mobileColumn ? "form__item-input-radio-items_mobileColumn" : ""}`}
      >
        {choices.map((item, i) => (
          <div className="form__item-input-radio-item-wrapper" key={i}>
            <label className="form__item-input-radio-item" key={item.value}>
              <input
                type="radio"
                name={name}
                className="form__item-input-radio"
                onChange={(e) => onChange(e.target.value)}
                value={item.value}
                // eslint-disable-next-line
                checked={value == item.value}
              />
              <div className="form__item-input-radio-circle"></div>
              <div className="form__item-input-radio-text">{item.title}</div>
            </label>
            <div className="form__item-input-radio-helptext">
              {item.helpText}
            </div>
          </div>
        ))}
      </div>
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputRadio;
