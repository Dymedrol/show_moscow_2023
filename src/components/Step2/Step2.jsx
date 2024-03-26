import React, { useEffect, useState } from "react";
import client from "../client/client";

import InputText from "../InputText/InputText";
import InputDate from "../InputDate/InputDate";
import InputTextarea from "../InputTextarea/InputTextarea";
import InputRadio from "../InputRadio/InputRadio";
import InputSelect from "../InputSelect/InputSelect";
import InputCheckboxCircle from "../InputCheckboxCircle/InputCheckboxCircle";

import PrewButton from "../PrewButton/PrewButton";
import NextButton from "../NextButton/NextButton";

const THEME_CHOICES = [
  { value: "1", label: "История" },
  { value: "2", label: "Наука" },
  { value: "3", label: "Спорт" },
  { value: "4", label: "Экология" },
  { value: "5", label: "Речные прогулки" },
];

const CITIZEN_CHOICES = [
  { value: 1, title: "Да" },
  { value: 2, title: "Нет" },
];

const COUNTY_CHOICES = [
  { value: "1", label: "Центральный" },
  { value: "2", label: "Северный" },
  { value: "3", label: "Северо-Восточный" },
  { value: "4", label: "Восточный" },
  { value: "5", label: "Юго-Восточный" },
  { value: "6", label: "Южный" },
  { value: "7", label: "Юго-Западный" },
  { value: "8", label: "Западный" },
  { value: "9", label: "Северо-Западный" },
  { value: "10", label: "Зеленоградский" },
  { value: "11", label: "Троицкий" },
  { value: "12", label: "Новомосковский" },
];

const TRANSPORT_CHOICES = [
  { value: "1", title: "общественный транспорт" },
  { value: "2", title: "велосипед" },
  { value: "3", title: "самокат" },
  { value: "4", title: "технология дополненной реальности" },
  { value: "5", title: "водный транспорт (речной трамвайчик, теплоход)" },
  { value: "6", title: "иное (укажите ниже)" },
];

function Step2(props) {
  const {
    setStep,

    name,
    surname,
    patronymic,
    birthday,
    email,
    phone,
    dataAgreement,
    positionAgreement,

    county,
    setCounty,
    isСitizen,
    setIsСitizen,
    routeTheme,
    setRouteTheme,
    routeTitle,
    setRouteTitle,
    routeDescription,
    setRouteDescription,
    duration,
    setDuration,
    routeStart,
    setRouteStart,
    objectsToShow,
    setObjectsToShow,
    routeFinish,
    setRouteFinish,
    routeUniqueness,
    setRouteUniqueness,
    transport,
    setTransport,
    other,
    setOther,
    posibility,
    setPosibility,

    taFamily,
    setTaFamily,
    taAdult,
    setTaAdult,
    taDisabilities,
    setDisabilities,
    taYoung,
    setTaYoung,
    taUniversal,
    setTaUniversal,

    routeLink,
    setRouteLink,
  } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const url = `/full_apply/`;

    const data = {
      name: name,
      sure_name: patronymic,
      f_name: surname,
      birthday: birthday,
      email: email,
      phone: phone,
      agree_processing: dataAgreement,
      agree_rules: positionAgreement,
      district: county.value,
      live_in_district: isСitizen === "1" ? true : false,
      tour_theme: routeTheme.value,
      tour_name: routeTitle,
      tour_description: routeDescription,
      tour_duration: duration,
      tour_start_location: routeStart,
      tour_attractions: objectsToShow,
      tour_stop_location: routeFinish,
      tour_uniq_description: routeUniqueness,
      tour_technology: transport,
      tour_technology_custom: other,
      tour_services: posibility,

      ta_young: taYoung,
      ta_universal: taUniversal,
      ta_family: taFamily,
      ta_adult: taFamily,
      ta_disabilities: taDisabilities,

      tour_url: routeLink,
    };

    client
      .post(url, data)
      .then((res) => {
        setStep(3);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          if ("non_field_errors" in error.response.data) {
            setStep(5);
            return;
          }

          setFormErrors(error.response.data);
        }
      });
  };

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

  useEffect(() => {
    const targetIsFilled =
      taFamily || taAdult || taDisabilities || taYoung || taUniversal;
    setIsFormFilled(
      targetIsFilled &&
        county &&
        routeTheme &&
        routeTitle &&
        routeDescription &&
        duration &&
        routeStart &&
        objectsToShow &&
        routeFinish &&
        routeUniqueness
    );
    // setIsFormFilled(true)
  }, [
    county,
    routeTheme,
    routeTitle,
    routeDescription,
    duration,
    routeStart,
    objectsToShow,
    routeFinish,
    routeUniqueness,
    taFamily,
    taAdult,
    taDisabilities,
    taYoung,
    taUniversal,
  ]);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);

  return (
    <form action="." onSubmit={submitHandler}>
      <div className="mm-form__inner">
        <InputSelect
          title="Административный округ г. Москвы *"
          placeholder="---"
          value={county}
          onChange={setCounty}
          options={COUNTY_CHOICES}
          name="district"
          error={formErrors?.district}
        />
        <InputRadio
          title="Являетесь ли Вы жителем района, по которому разработан маршрут? *"
          choices={CITIZEN_CHOICES}
          onChange={setIsСitizen}
          value={isСitizen}
          isGorizontal
          name="live_in_district"
          error={formErrors?.live_in_district}
        />
        <InputSelect
          title="Тематика маршрута *"
          placeholder="---"
          value={routeTheme}
          onChange={setRouteTheme}
          options={THEME_CHOICES}
          name="tour_theme"
          error={formErrors?.tour_theme}
        />
        <InputText
          title="Название маршрута *"
          helpText="Объем текста не должен превышать 100 символов"
          placeholder="Текст"
          value={routeTitle}
          onChange={setRouteTitle}
          maxLength={100}
          name="tour_name"
          error={formErrors?.tour_name}
        />
        <InputTextarea
          title="Краткое описание маршрута *"
          subTitle="Объем текста не должен превышать 1000 символов"
          placeholder="Текст"
          maxlength={1000}
          value={routeDescription}
          onChange={setRouteDescription}
          name="tour_description"
          error={formErrors?.tour_description}
        />
        <InputDate
          title="Продолжительность экскурсии *"
          helpText="Укажите время в формате ЧЧ:ММ"
          placeholder="00:00"
          mask="99:99"
          value={duration}
          onChange={setDuration}
          name="tour_duration"
          error={formErrors?.tour_duration}
        />
        <InputText
          title="Место начала маршрута *"
          placeholder="Текст"
          value={routeStart}
          onChange={setRouteStart}
          name="tour_start_location"
          error={formErrors?.tour_start_location}
        />
        <InputTextarea
          title="Объекты показа по пути следования маршрута *"
          subTitle="Кратко опишите объекты. Объем текста не должен превышать 1500 символов"
          placeholder="Текст"
          maxlength={1500}
          value={objectsToShow}
          onChange={setObjectsToShow}
          name="tour_attractions"
          error={formErrors?.tour_attractions}
        />
        <InputText
          title="Место завершения маршрута *"
          placeholder="Текст"
          value={routeFinish}
          onChange={setRouteFinish}
          name="tour_stop_location"
          error={formErrors?.tour_stop_location}
        />
        <InputTextarea
          title="Уникальность и особенности прохождения маршрута *"
          subTitle="Объем текста не должен превышать 1000 символов"
          placeholder="Текст"
          maxlength={1000}
          value={routeUniqueness}
          onChange={setRouteUniqueness}
          name="tour_uniq_description"
          error={formErrors?.tour_uniq_description}
        />
        <InputRadio
          title="Прохождение маршрута включает в себя:"
          choices={TRANSPORT_CHOICES}
          onChange={setTransport}
          value={transport}
          name="tour_technology"
          error={formErrors?.tour_technology}
        />
        {transport === "6" && (
          <InputText
            placeholder="Иное"
            value={other}
            onChange={setOther}
            name="tour_technology_custom"
            error={formErrors?.tour_technology_custom}
            flat
          />
        )}
        <InputTextarea
          title="Возможности организации туристского обслуживания и досуга на маршруте"
          subTitle="Укажите точки питания, театрализованные представления, квесты и т.д."
          placeholder="Текст"
          maxlength={500}
          value={posibility}
          onChange={setPosibility}
          error={formErrors?.tour_services}
          name="tour_services"
        />
        <div className="form__item-input-circle-title-wrapper">
          <div className="form__item-title">Целевая аудитория маршрута: *</div>
        </div>
        <div className="item-wrapper">
          <InputCheckboxCircle
            title="семьи с детьми"
            value={taFamily}
            onChange={setTaFamily}
            name="ta_family"
            error={formErrors?.ta_family}
          />
          <InputCheckboxCircle
            title="люди старшего поколения"
            value={taAdult}
            onChange={setTaAdult}
            name="ta_adult"
            error={formErrors?.ta_adult}
          />
          <InputCheckboxCircle
            title="люди с ограниченными возможностями"
            value={taDisabilities}
            onChange={setDisabilities}
            name="ta_disabilities"
            error={formErrors?.ta_disabilities}
          />
          <InputCheckboxCircle
            title="молодежь"
            value={taYoung}
            onChange={setTaYoung}
            name="ta_young"
            error={formErrors?.ta_young}
          />
          <InputCheckboxCircle
            title="универсальный, подходит для всех"
            value={taUniversal}
            onChange={setTaUniversal}
            name="ta_universal"
            error={formErrors?.ta_universal}
          />
        </div>

        <InputText
          title="Ссылка на маршрут"
          helpText="Укажите ссылку на данный маршрут или его описание на вашем сайте или ином ресурсе"
          placeholder="Текст"
          value={routeLink}
          onChange={setRouteLink}
          name="tour_url"
          error={formErrors?.tour_url}
        />
      </div>

      <div className="buttons-wrapper">
        <PrewButton
          onClick={() => {
            setStep(1);
          }}
        />
        <NextButton disabled={!isFormFilled} type="submit" text="отправить" />
      </div>
    </form>
  );
}

export default Step2;
