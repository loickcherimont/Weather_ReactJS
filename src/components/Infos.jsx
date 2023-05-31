import React from "react";

export function Infos({icon, temperature, description, name, country}) {
    return <div className="bg-slate-100 min-h-1/3 h-auto">
        {icon ? <img className="icon" src={icon} /> : null}
      {temperature ? <div className="temperature">{temperature} °C</div> : null}
      {description ? <div className="description">{description}</div> : null}
      {name ? <div className="place">{name}, {country}</div> : null}
    </div>
}