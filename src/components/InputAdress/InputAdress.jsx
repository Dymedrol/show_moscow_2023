import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

function InputAdress(props) {
  const { title, error, onChange, value, name } = props;

  return (
    <div className="mm-form__item">
      <div className="form__item-title form__item-input-text-title" name={name}>
        {title}
      </div>
      <AddressSuggestions
        inputProps={{
          placeholder: "Начните вводить",
          onChange: (event) => onChange({ value: event.target.value }),
        }}
        onChange={onChange}
        token="5b3e616bcf78498eced8f7976547a11e54cbd933"
        value={value}
        containerClassName="react-dadata react-dadata__container mm-adress-input"
      />
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputAdress;
