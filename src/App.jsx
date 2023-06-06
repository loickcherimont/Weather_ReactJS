import { useState } from 'react';
import './App.css';
import { FilterBar } from './components/FilterBar';
import { Alert } from './components/Alert';
import { Details } from './components/Details';
import { Visual } from './components/Visual';


function App() {
  // States
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    icon: "", description: "", temperature: 0, name: "", country: ""
  });


  const [error, setError] = useState("");

  const { icon, description, temperature, name, country } = data;

  return (
    <main className="app h-[480px] w-[300px] bg-sky-400 text-white flex flex-col shadow-md rounded-3xl">
      {/* Alert */}
      <Alert>{error}</Alert>

      {/** Pass parent's setError to child FilterBar*/}

      <FilterBar
        city={city}
        setCity={setCity}
        setError={setError}
        setData={setData}
      />

      <Visual
        icon={icon}
        temperature={temperature}
      />

      <Details
        description={description}
        city={name}
        country={country}
      />
    </main>

  )
}

export default App;
