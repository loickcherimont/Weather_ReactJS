import React from "react";

export function Details({ description, city, country }) {
    return <footer className="bg-white text-slate-700 border flex flex-col grow rounded-b-3xl">
        <div>
            <p className="font-bold p-1">Weather now</p>
        </div>

        <div className="flex justify-around">
            <div>
                <div className="text-slate-400 font-thin">City</div>
                {city ? <div className="font-semibold">{city}</div> : null}
            </div>
            <div>
                <div className="text-slate-400 font-thin">Conditions</div>
                {description ? <div className="font-semibold">{description}</div> : null}

            </div>
            <div>
                <div className="text-slate-400 font-thin">Country</div>
                {country ? <div className="font-semibold">{country}</div> : null}
            </div>
        </div>
    </footer>
}