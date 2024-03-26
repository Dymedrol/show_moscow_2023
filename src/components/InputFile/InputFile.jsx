import React, { useState } from "react";
import axios from "axios";
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const url = "https://travelhub.moscow/api/mth_storage/upload_data/";

function InputFile(props) {
  const { title, subTitle, placeholder, value, onChange, error } = props;

  const [fileError, setFileError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFileError("");
    const file = e.target.files[0];
    const filename = CyrillicToTranslit().transform(file.name, "_");

    setIsLoading(true);
    onChange("");

    axios
      .post(url, { filename: filename })
      .then((res) => {
        const recivedUrl = res.data.url;
        let recievedFields = res.data.fields;
        let form_data = new FormData();

        for (var key in recievedFields) {
          form_data.append(key, recievedFields[key]);
        }

        form_data.append("file", file);

        axios
          .post(recivedUrl, form_data)
          .then((res) => {
            if (res.status === 204) {
              onChange(res.headers.location);
              setIsLoading(false);
            } else {
              setFileError("Произошла ошибка. Повторите загрузку файла");
              setIsLoading(false);
            }
          })
          .catch((error) => {
            setFileError("Произошла ошибка. Повторите загрузку файла");
            setIsLoading(false);
          });
      })
      .catch((error) => {
        setFileError("Произошла ошибка. Повторите загрузку файла");
        setIsLoading(false);
      });
  };

  return (
    <div className="mm-form__item">
      <div className="form__item-title form__item-input-file-title">
        {title}
      </div>
      <div className="form__item-subtitle form__item-file-subtitle">
        {subTitle}
      </div>
      <div className="form__item-input-file-wrapper">
        <input
          type="text"
          className="mm-form__text-input"
          disabled={isLoading}
          placeholder={isLoading ? "Загрузка ..." : placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <label className="form__item-input-file-label">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 -4.37114e-08L7 13L6 13L6 0L7 -4.37114e-08Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 7H0V6H13V7Z"
                fill="white"
              />
            </svg>

            <input
              type="file"
              className="form__item-input-file"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>

      {fileError && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {fileError}
        </div>
      )}
      {error && (
        <div className="mm-form__input-error mm-form__text-input-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default InputFile;
