import { useRef, useState } from "react";
import Cords from "../../models/Cords";
import City from "../city/City";

import cities from '../../mocks/cities'

function Home() {
  const [city, setCity] = useState<any>(null);

  const selectCity = (props: Cords) => {
    console.log(props);
    setCity(props);
  };

  const clearCity = () => {
    setCity(null);
  };

  return (
    <>
      {!city && (
        <div className="container">
          <div className="header">
            <div>
              <p className="title">WEATHER</p>
              <span>select a city</span>
            </div>
          </div>
          <div className="globo">
            <div>
              <img src="./src/assets/img/globo.png" alt="globo" />
            </div>
          </div>
          <div className="cities">
            {cities.map((city) => (
              <div key={city.id} className="cities-button">
                <button onClick={() => selectCity(city.cords)}>
                  {city.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {city && <City props={city} clearCity={clearCity} />}
    </>
  );
}

export default Home;
