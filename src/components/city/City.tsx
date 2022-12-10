import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

import { getWeather } from "../../services/weather";

import backgrounds from "../../mocks/backgrounds";

function City({ ...props }) {
  const [weather, setWeather] = useState<any>({});

  const [styleContainer, setStyleContainer] = useState("default");

  const backgroundColor = (id: string) => {
    const background =
      backgrounds.filter((item) => {
        return item.id === id;
      })?.[0] || "default";

    setStyleContainer(background.backgroundName);
  };

  useEffect(() => {
    getWeather(props.cords).then((resp) => {
      setWeather(resp.data);
      backgroundColor(resp.data.weather[0].icon);
    });
  }, []);

  return (
    <div className={`container-weather ${styleContainer}`}>
      <div className="nav">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={props.clearCity}
          className="nav-icon"
        />
      </div>
      {weather.name && (
        <div key={weather.id}>
          <div className="weather">
            <div>
              <p>{weather.name.toUpperCase()}</p>
              <span>{weather.weather?.[0].description}</span>
            </div>
          </div>
          <div className="temp">
            <div className="temp-now">
              <p>{Math.trunc(weather.main?.temp)}</p>
            </div>
            <div className="temp-now-others">
              <div className="temp-now-others-ground">
                <p>&deg;C</p>
              </div>
              <div className="temp-now-others-max">
                <div className="item">
                  <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <div className="item">
                  <p>{Math.trunc(weather.main?.temp_max)}&deg;</p>
                </div>
              </div>
              <div className="temp-now-others-min">
                <div className="item">
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="item">
                  <p>{Math.trunc(weather.main?.temp_min)}&deg;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="temp-img">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
          </div>
          <div className="others">
            <div className="others-grid">
              <p>wind speed</p>
              <span>{weather.wind.speed}m/s</span>
            </div>
            <div className="others-grid">
              <p>sunrise</p>
              <span>{format(weather.sys.sunrise, "HH:MM")} AM</span>
            </div>
            <div className="others-grid">
              <p>sunset</p>
              <span>{format(weather.sys.sunset, "HH:MM")} PM</span>
            </div>
            <div className="others-grid">
              <p>humidity</p>
              <span>{weather.main.humidity}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default City;
