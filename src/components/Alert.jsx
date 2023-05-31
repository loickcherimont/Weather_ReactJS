import React from "react";

/** Display user error messages */
export function Alert({children}) {
    return <div className="text-red-500 errorMessage">{children}</div>
}