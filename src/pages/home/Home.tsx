/* eslint-disable jsx-a11y/no-static-element-interactions */
import cities from '../../mocks/cities';
import globeImg from '../../assets/images/globe.png';

type PropsHome = {
  selectCity: any;
};

function Home({ ...props }: PropsHome) {
  return (
    <div className="container">
      <div className="center">
        <div className="header">
          <p className="title">WEATHER</p>
          <span>select a city</span>
        </div>
        <div className="globe">
          <div className="globe-img">
            <img src={globeImg} alt="Globe" />
          </div>
        </div>
        <div className="cities">
          {cities.map((item) => (
            <div
              key={item.id}
              className="cities-item"
              onClick={() => props.selectCity(item.cords)}
              onKeyUp={() => props.selectCity(item.cords)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
