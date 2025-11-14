export default function WeatherInfo({ by, temperatur, følesSom }) {
  return (
    <div className="weather-left">
      <h3 className="city-name">
        Temperatur i <span className="spanBy">{by}</span>
      </h3>
      <h4 className="feels-like">Føles som {følesSom}</h4>
      <h2 className="city-temp">{temperatur}</h2>
    </div>
  );
}
