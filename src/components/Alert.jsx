import React from "react";

/** Display user error messages */
export function Alert({children}) {
    return <div className="errorMessage" style={{ color: "#FF0000" }}>{children}</div>
}