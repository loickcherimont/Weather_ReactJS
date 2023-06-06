import { fetchAPI } from "../assets/js/api.js";
import { FaSearch } from "react-icons/fa";

export function FilterBar({ city, setCity, setError, setData }) {

    /** Handlers */
    const handleSubmit = (e) => {

        e.preventDefault();

        /** Display error message if user didn't fill any city name */
        if (!city) {
            setError("To use correctly the filter, fill a city please!");
            return;
        }
        setError("");
        setCity(city);

        /** /!\ Delete API key before pushing /!\ */
        fetchAPI(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`)
            .then((d) => {

                setData({
                    icon: `https://openweathermap.org/img/wn/${d["weather"][0]["icon"]}@4x.png`,
                    description: d["weather"][0]["description"],
                    temperature: Math.ceil(d.main.temp),
                    name: d["name"],
                    country: d["sys"]["country"]
                });

                setCity("");
            }, () => { throw new Error("Server Not Found!") })
            .catch((err) => {
                setError(err.message);
            });
    }

    /** To update a state */
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    /** Render */
    return <form method="GET" onSubmit={handleSubmit} className="header m-2 shrink">
        <div className="form__section flex justify-center items-center p-2">
            <label htmlFor="filterBar">
                {/* Get city weather */}
                <input
                    type="search"
                    name="filter_bar"
                    id="filterBar"
                    placeholder="London, ..."
                    value={city}
                    onChange={handleChange}
                    className="mx-2 rounded-full bg-slate-100/50 p-2 text-sm italic w-60"
                    title="Get city weather"
                />
            </label>

            <button type="submit" className="rounded-full p-3">
                <FaSearch style={{color: "white"}}/>
            </button>
        </div>

        <p className="text-white font-normal">Today</p>
    </form>
}