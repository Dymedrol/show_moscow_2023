import React, { useEffect } from "react";
import client from "../client/client";

function Step0(props) {
  const { setStep } = props;

  useEffect(() => {
    const url = `/is_alive/`;
    client
      .get(url)
      .then((res) => {
        if (res.data.is_alive) {
          setStep(1);
        } else {
          setStep(5);
        }
      })
      .catch((error) => {
        alert("Произошла ошибка. Попробуйте перезагрузить страницу");
      });
  }, [setStep]);

  return <div className="mm-finish__text1"></div>;
}

export default Step0;
