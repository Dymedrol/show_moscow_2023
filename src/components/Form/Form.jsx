import React, { useState, useEffect } from "react";
import Step0 from "../Step0/Step0";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

const STEP_TITLES = {
  step1: "Персональные данные",
  step2: "Информация о маршруте",
};

function Form() {
  const [title, setTitle] = useState("Персональные данные");

  const [step, setStep] = useState(0);

  // step 1
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [positionAgreement, setPositionAgreement] = useState(false);
  const [dataAgreement, setDataAgreement] = useState(false);

  // const [name, setName] = useState("name");
  // const [surname, setSurname] = useState("asdas");
  // const [patronymic, setPatronymic] = useState("asd");
  // const [email, setEmail] = useState("ddd@ffff.ru");
  // const [phone, setPhone] = useState("+79635524523");

  // const [positionAgreement, setPositionAgreement] = useState(true);
  // const [dataAgreement, setDataAgreement] = useState(true);

  //step2
  const [county, setCounty] = useState(null);
  const [isСitizen, setIsСitizen] = useState(2);
  const [routeTheme, setRouteTheme] = useState("");
  const [routeTitle, setRouteTitle] = useState("");
  const [routeDescription, setRouteDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [routeStart, setRouteStart] = useState("");
  const [objectsToShow, setObjectsToShow] = useState("");
  const [routeFinish, setRouteFinish] = useState("");
  const [routeUniqueness, setRouteUniqueness] = useState("");
  const [transport, setTransport] = useState("");
  const [other, setOther] = useState("");
  const [posibility, setPosibility] = useState("");

  const [taFamily, setTaFamily] = useState(false);
  const [taAdult, setTaAdult] = useState(false);
  const [taDisabilities, setDisabilities] = useState(false);
  const [taYoung, setTaYoung] = useState(false);
  const [taUniversal, setTaUniversal] = useState(false);

  const [routeLink, setRouteLink] = useState("");

  // ------------------------------------------

  useEffect(() => {
    if (step === 1) {
      setTitle(STEP_TITLES.step1);
    }
    if (step === 2) {
      setTitle(STEP_TITLES.step2);
    }
  }, [step]);

  return (
    <div className="mm-form">
      {step !== 0 && step !== 3 && step !== 3 && step !== 4 && step !== 5 && (
        <>
          <div className="mm-form-steps">
            <div className="mm-form-steps__item mm-form-steps__item_active"></div>
            <div
              className={
                step >= 2
                  ? "mm-form-steps__item mm-form-steps__item_active"
                  : "mm-form-steps__item"
              }
            ></div>
          </div>

          <div className="mm-form-header">
            <div className="mm-form-header__step">Шаг {step}</div>
            <div className="mm-form-header__title">{title}</div>

            <div
              className={`mm-form-header__count mm-form-header__count-${step}`}
            >
              <div>{step}/2</div>
            </div>
          </div>
        </>
      )}

      {(() => {
        switch (step) {
          case 1:
            return (
              <Step1
                setStep={setStep}
                name={name}
                setName={setName}
                surname={surname}
                setSurname={setSurname}
                patronymic={patronymic}
                setPatronymic={setPatronymic}
                birthday={birthday}
                setBirthday={setBirthday}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                positionAgreement={positionAgreement}
                setPositionAgreement={setPositionAgreement}
                dataAgreement={dataAgreement}
                setDataAgreement={setDataAgreement}
              />
            );
          case 2:
            return (
              <Step2
                setStep={setStep}
                name={name}
                setName={setName}
                surname={surname}
                setSurname={setSurname}
                patronymic={patronymic}
                setPatronymic={setPatronymic}
                birthday={birthday}
                setBirthday={setBirthday}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                positionAgreement={positionAgreement}
                setPositionAgreement={setPositionAgreement}
                dataAgreement={dataAgreement}
                setDataAgreement={setDataAgreement}
                county={county}
                setCounty={setCounty}
                isСitizen={isСitizen}
                setIsСitizen={setIsСitizen}
                routeTheme={routeTheme}
                setRouteTheme={setRouteTheme}
                routeTitle={routeTitle}
                setRouteTitle={setRouteTitle}
                routeDescription={routeDescription}
                setRouteDescription={setRouteDescription}
                duration={duration}
                setDuration={setDuration}
                routeStart={routeStart}
                setRouteStart={setRouteStart}
                objectsToShow={objectsToShow}
                setObjectsToShow={setObjectsToShow}
                routeFinish={routeFinish}
                setRouteFinish={setRouteFinish}
                routeUniqueness={routeUniqueness}
                setRouteUniqueness={setRouteUniqueness}
                transport={transport}
                setTransport={setTransport}
                other={other}
                setOther={setOther}
                posibility={posibility}
                setPosibility={setPosibility}
                taFamily={taFamily}
                setTaFamily={setTaFamily}
                taAdult={taAdult}
                setTaAdult={setTaAdult}
                taDisabilities={taDisabilities}
                setDisabilities={setDisabilities}
                taYoung={taYoung}
                setTaYoung={setTaYoung}
                taUniversal={taUniversal}
                setTaUniversal={setTaUniversal}
                routeLink={routeLink}
                setRouteLink={setRouteLink}
              />
            );
          case 3:
            return <Step3 />;
          case 4:
            return <Step4 setStep={setStep} />;
          case 5:
            return <Step5 />;
          default:
            return <Step0 setStep={setStep} />;
        }
      })()}
    </div>
  );
}

export default Form;
