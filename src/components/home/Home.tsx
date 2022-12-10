import { useState } from "react";
import Cords from "../../models/Cords";
import City from "../city/City";

import cities from '../../mocks/cities'

function Home() {
  const [city, setCity] = useState<Cords>({
    lat: 0,
    lon: 0
  });

  const selectCity = (props: Cords) => {
    setCity(props);
  };

  const clearCity = () => {
    setCity({lat: 0, lon: 0});
  };

  return (
    <>
      {city.lat === 0 && (
        <div className="container">
          <div className="header">
            <div>
              <p className="title">WEATHER</p>
              <span>select a city</span>
            </div>
          </div>
          <div className="globo">
            <div>
              <img src="./src/assets/img/earth.png" alt="globo" />
            </div>
          </div>
          <div className="cities">
            {cities.map((city) => (
              <div key={city.id} className="cities-button">
                <span onClick={() => selectCity(city.cords)}>
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {city.lat !== 0 && <City cords={city} clearCity={clearCity} />}
    </>
  );
}

export default Home;
