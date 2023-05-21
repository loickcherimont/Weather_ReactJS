import React from "react";

export function Header({title, instructions}) {

    return <div className="header">
        <h1>{title}</h1>
        <p>{instructions}</p>
    </div>

}