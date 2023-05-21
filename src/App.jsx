import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { Alert } from './components/Alert';


function App() {
  // States
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    icon: "", description: "", temperature: 0, name: "", country: ""
  });

  // With Alert?
  const [error, setError] = useState("");

  const { icon, description, temperature, name, country } = data;

  return (
    <>
      {/* Header */}
      <Header
        title={"Weather App"}
        instructions={"Tap a city name and get its actual weather"}
      />
      {/* Alert */}
      <Alert>{error}</Alert>
      {/** @todo - Rename the prop from FilterBar */}
      {/** Pass parent's setError to child FilterBar*/}
      <FilterBar 
        city={city}
        setCity={setCity}
        setError={setError}
        setData={setData}
      />


      {/* WeatherRender */}
      {/* @todo - Create a component */}
      {icon ? <img className="icon" src={icon} /> : null}
      {temperature ? <div className="temperature">{temperature} °C</div> : null}
      {description ? <div className="description">{description}</div> : null}
      {name ? <div className="place">{name}, {country}</div> : null}
    </>
  )
}

export default App;
