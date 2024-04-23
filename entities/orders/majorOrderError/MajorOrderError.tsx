import React from "react";

import "./MajorOrderError.css";

const MajorOrderError = () => {
  return (
    <div className="rootMajorOrderErrorWidget">
      <h3 className="rootMajorOrderErrorWidget_Title">
        Cбой в работе систем Министерства Обороны!
      </h3>

      <p className="rootMajorOrderErrorWidget_Description">
        Мы не можем получить данные о главном приказе из-за ошибки в системах
        получения данных
      </p>

      <div className="rootMajorOrderErrorWidget_ErrorsBlock justify-around">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <p
            key={index + 1}
            className="rootMajorOrderErrorWidget_ErrorsBlock_Text"
          >
            Ошибка!
          </p>
        ))}
      </div>

      <div className="rootMajorOrderErrorWidget_ErrorsBlock justify-evenly">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <p
            key={index + 1}
            className="rootMajorOrderErrorWidget_ErrorsBlock_Text"
          >
            Ошибка!
          </p>
        ))}
      </div>
    </div>
  );
};

export default MajorOrderError;
