import React from "react";
import Select, { components } from "react-select";

const customStyles = {
  indicatorSeparator: () => undefined,
  control: () => undefined,
  menu: () => undefined,
  indicatorsContainer: () => undefined,
  dropdownIndicator: () => undefined,
  menuList: () => undefined,
  singleValue: () => undefined,
  valueContainer: () => undefined,
  clearIndicator: () => undefined,
  input: () => undefined,
  option: () => undefined,
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.29316 8.32866L0.222092 1.25714L0.929199 0.549988L8.00027 7.62151L7.29316 8.32866Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7782 1.37849L7.70711 8.45001L7 7.74286L14.0711 0.671336L14.7782 1.37849Z"
          fill="white"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

function InputSelect(props) {
  const { title, placeholder, error, onChange, value, name, options } = props;

  return (
    <div className="mm-form__item">
      <div className="form__item-title form__item-input-text-title" name={name}>
        {title}
      </div>
      <Select
        options={options}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        classNamePrefix="react-select"
        styles={customStyles}
        components={{ DropdownIndicator }}
        isSearchable={false}
      />
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputSelect;
