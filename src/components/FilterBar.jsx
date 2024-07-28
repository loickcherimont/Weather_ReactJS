import { fetchAPI } from "../assets/js/api.js";
import { FaSearch } from "react-icons/fa";

export function FilterBar({ city, setCity, setError, setData }) {

    // Parameter : name - string
    // Replace "Arrondissement de [NAME]" with "[NAME]"
    const shorten = (name) => {

        const aName = name.split(" ");

        if(aName.includes("Arrondissement") && aName.includes("de"))
            return aName.pop();

        return aName.join(" ");
    }

    // INDICATION : /!\ Delete API key before pushing /!\
    const YOUR_API_KEY = 'ENTER_YOUR_API_KEY_HERE';

    // ** Handlers **
    const handleSubmit = (e) => {

        e.preventDefault();

        // Display error message if user didn't fill any city
        if (!city) {
            setError("To use correctly the filter, fill a city please!");
            return;
        }

        // Else clear error message
        setError("");
        setCity(city);

        // INDICATION : /!\ Delete API key before pushing /!\
        fetchAPI(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${YOUR_API_KEY}`)
            .then((d) => {

                setData({
                    icon: `https://openweathermap.org/img/wn/${d["weather"][0]["icon"]}@4x.png`,
                    description: d["weather"][0]["description"],
                    temperature: Math.ceil(d.main.temp),
                    name: shorten(d["name"]), // name for city name to avoid confusion by React
                    country: d["sys"]["country"]
                });
                console.log(d["name"].split(" ").slice(2).join());

                setCity("");
            }, () => { throw new Error("Server Not Found!") })
            .catch((err) => {
                setError(err.message);
            });
    }

    // To update input state
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    // ** Render **
    return <form method="GET" onSubmit={handleSubmit} className="header m-2 shrink">
        <div className="form__section flex justify-center items-center p-2">
            <label htmlFor="filterBar">

                <input
                    type="search"
                    name="filter_bar"
                    id="filterBar"
                    placeholder="Search for a city"
                    value={city}
                    onChange={handleChange}
                    className="mx-2 rounded-full bg-slate-100/50 p-2 text-sm italic w-60 placeholder:text-slate-700 text-slate-700"
                    title="Get city weather"
                />
            </label>

            <button type="submit" className="rounded-full p-3">
                <FaSearch style={{ color: "white" }} />
            </button>
        </div>

        <p className="text-white font-normal">Today</p>
    </form>
}