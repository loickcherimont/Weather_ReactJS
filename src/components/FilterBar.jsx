import React from "react";
import { fetchAPI } from "../assets/js/api.js";
import { FilterBtn } from "./FilterBtn.jsx";

export function FilterBar({ city, setCity, setError, setData }) {

    /** Handlers */
    const handleSubmit = (e) => {

        e.preventDefault();

        // Check if user filled a city name
        if (!city) {
            setError("Please enter a city!");
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
    const handleChange = (e) => {
        setCity(e.target.value);
    }

    /** Render */
    return <form method="GET" onSubmit={handleSubmit} className="header m-2 shrink">
        <input
            type="search"
            name="filter_bar"
            placeholder="London, ..."
            value={city}
            onChange={handleChange}
            className="m-2 rounded-full bg-slate-100/25 p-2 text-sm italic"
        />
        <FilterBtn />
        <div className="text-sm text-white">Today</div>
    </form>
}