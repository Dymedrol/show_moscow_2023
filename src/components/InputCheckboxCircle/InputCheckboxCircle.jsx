import React from "react";

function InputCheckboxCircle(props) {
  const { title, onChange, value, name, error } = props;

  return (
    <>
      <label className="mm-form__item mm-form__item-checkbox_circle">
        <div className="form__item-input-checkbox-item">
          <input
            type="checkbox"
            className="form__item-input-checkbox"
            onChange={(e) => onChange(!value)}
            value={value}
            checked={value ? true : false}
            name={name}
          />
          <div className="form__item-input-checkbox-circle"></div>
        </div>
        <div
          className="form__item-input-checkbox-text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
      </label>
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </>
  );
}

export default InputCheckboxCircle;
