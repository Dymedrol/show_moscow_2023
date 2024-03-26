import React from "react";

function InputCheckbox(props) {
  const { title, onChange, value, name, error } = props;

  return (
    <>
      <div className="mm-form__item mm-form__item-checkbox">
        <label className="form__item-input-checkbox-item">
          <input
            type="checkbox"
            className="form__item-input-checkbox"
            onChange={(e) => onChange(!value)}
            value={value}
            checked={value ? true : false}
            name={name}
          />
          <div className="form__item-input-checkbox-squar"></div>
        </label>
        <div
          className="form__item-input-checkbox-text"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
      </div>
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </>
  );
}

export default InputCheckbox;
