import React, { useEffect, useState } from "react";
import client from "../client/client";

import InputText from "../InputText/InputText";
import InputDate from "../InputDate/InputDate";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import PrewButton from "../PrewButton/PrewButton";
import NextButton from "../NextButton/NextButton";

function Step1(props) {
  const {
    setStep,
    name,
    setName,
    surname,
    setSurname,
    patronymic,
    setPatronymic,
    birthday,
    setBirthday,
    email,
    setEmail,
    phone,
    setPhone,
    dataAgreement,
    setDataAgreement,
    positionAgreement,
    setPositionAgreement,
  } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const url = `/first_step/`;

    const data = {
      name: name,
      sure_name: patronymic,
      f_name: surname,
      birthday: birthday,
      email: email,
      phone: phone,
      agree_processing: dataAgreement,
      agree_rules: positionAgreement,
    };

    client
      .post(url, data)
      .then((res) => {
        setStep(2);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          if ("non_field_errors" in error.response.data) {
            setStep(4);
            return;
          }

          setFormErrors(error.response.data);
        }
      });
  };

  useEffect(() => {
    setIsFormFilled(
      name &&
        surname &&
        patronymic &&
        birthday &&
        email &&
        phone &&
        positionAgreement &&
        dataAgreement
    );
    // setIsFormFilled(true)
  }, [
    name,
    surname,
    patronymic,
    birthday,
    email,
    phone,
    positionAgreement,
    dataAgreement,
  ]);

  useEffect(() => {
    if (formErrors) {
      const firstError = Object.keys(formErrors)[0];
      const firstErrorInput = document.querySelector(`[name=${firstError}]`);

      firstErrorInput.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  }, [formErrors]);

  return (
    <form action="." onSubmit={submitHandler}>
      <div className="mm-form__inner">
        <InputText
          title="Имя *"
          placeholder="Иван"
          value={name}
          onChange={setName}
          error={formErrors?.name}
          name="name"
        />
        <InputText
          title="Фамилия *"
          placeholder="Иванов"
          value={surname}
          onChange={setSurname}
          error={formErrors?.f_name}
          name="f_name"
        />
        <InputText
          title="Отчество *"
          placeholder="Иванович"
          value={patronymic}
          onChange={setPatronymic}
          error={formErrors?.sure_name}
          name="sure_name"
        />
        <InputDate
          title="Дата рождения *"
          placeholder="31.12.1970"
          mask="99.99.9999"
          value={birthday}
          onChange={setBirthday}
          error={formErrors?.birthday}
          name="birthday"
        />
        <InputText
          title="E-mail *"
          placeholder="hello@gmail.com"
          type="email"
          value={email}
          onChange={setEmail}
          error={formErrors?.email}
          name="email"
        />
        <InputDate
          title="Телефон *"
          placeholder="+7 999 000 00 00"
          mask="(+7) 999 999 9999"
          type="tel"
          value={phone}
          onChange={setPhone}
          error={formErrors?.phone}
          name="phone"
        />
        <InputCheckbox
          title="Подтверждаю свое согласие с <a href='./Положение_о_проведении_общегородского_онлайн_конкурса_маршрутов.pdf' target='_blank'>Положением о проведении Конкурса</a>"
          value={positionAgreement}
          onChange={setPositionAgreement}
          error={formErrors?.agree_processing}
          name="agree_processing"
        />
        <InputCheckbox
          title="Обработка моих персональных данных производится Комитетом по туризму города Москвы в соответствии с требованиями Федерального закона от 27 июля 2006 №152-ФЗ «О персональных данных» (далее – Федеральный закон №152-ФЗ)"
          value={dataAgreement}
          onChange={setDataAgreement}
          error={formErrors?.agree_rules}
          name="agree_rules"
        />
      </div>

      <div className="buttons-wrapper">
        <PrewButton isHidden={true} />
        <NextButton
          type="submit"
          disabled={!isFormFilled}
          text="следующий шаг"
        />
      </div>
    </form>
  );
}

export default Step1;
