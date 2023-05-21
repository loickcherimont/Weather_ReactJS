import React, { useState } from "react";
import { fetchAPI, API_KEY } from "../assets/js/api.js";
// import { Alert } from "./Alert.jsx";

export function FilterBar({city,setCity, setError,setData}) {

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

        fetchAPI(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
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
    return <>
        <form action="" method="GET" onSubmit={handleSubmit}>
            <input
                type="search"
                name="filter_bar"
                placeholder="London, ..."
                value={city}
                onChange={handleChange}
            />
            {/** @todo - Replace S by an icon */}
            <input type="submit" value="S" />
        </form>
    </>

}