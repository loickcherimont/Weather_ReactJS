import React from "react";

export function Visual({ icon, temperature }) {
    return <div className="center m-2 flex flex-col justify-center items-center grow">
        {icon ? <img className="rounded-full bg-slate-100/25 h-24 w-24" src={icon} /> : null}
        {temperature ? <div className="self-start text-6xl font-extralight">{temperature} °C</div> : null}
    </div>
}