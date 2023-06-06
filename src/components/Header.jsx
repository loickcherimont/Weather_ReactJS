import React from "react";

export function Header({title}) {

    return <div className="header">
        <h1 className="p-6 font-bold text-5xl">{title} <span className="text-sky-400">App</span></h1>
    </div>

}