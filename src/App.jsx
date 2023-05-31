import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { Alert } from './components/Alert';
import { Infos } from './components/Infos';


function App() {
  // States
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    icon: "", description: "", temperature: 0, name: "", country: ""
  });


  const [error, setError] = useState("");

  const { icon, description, temperature, name, country } = data;

  return (
    <div className="bg-sky-500 border-2 border-black w-[300px] h-[450px]">
      {/* Header */}
      <Header
        title={"Weather App"}
        instructions={"Tap a city name and get its actual weather"}
      />  

      {/* WeatherInfos */}
      <Infos
        icon={icon} 
        temperature={temperature} 
        description={description}
        name={name}
        country={country}
      />

      {/** Pass parent's setError to child FilterBar*/}
      <FilterBar 
        city={city}
        setCity={setCity}
        setError={setError}
        setData={setData}
      />

      {/* Alert */}
      <Alert>{error}</Alert>
    </div>
  )
}

export default App;
