import { format } from 'date-fns';
import OpenWeartherMap from '../../models/OpenWeartherMap';

type OthersProps = {
  weather: OpenWeartherMap;
  styleContainer: string;
};

function Others({ weather, styleContainer }: OthersProps) {
  return (
    <div className="others">
      <div className="others-grid">
        <p>wind speed</p>
        <span>{weather.wind?.speed}m/s</span>
      </div>
      <hr className={styleContainer} />
      <div className="others-grid">
        <p>sunrise</p>
        <span>{format(weather.sys?.sunrise || 0, 'hh:mm')} AM</span>
      </div>
      <hr className={styleContainer} />
      <div className="others-grid">
        <p>sunset</p>
        <span>{format(weather.sys?.sunset || 0, 'hh:mm')} PM</span>
      </div>
      <hr className={styleContainer} />
      <div className="others-grid">
        <p>humidity</p>
        <span>{weather.main?.humidity}%</span>
      </div>
    </div>
  );
}

export default Others;
