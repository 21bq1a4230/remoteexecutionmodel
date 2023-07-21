import React from "react";
import "./OutputField.css"

const OutputField = () => {
    return(
        <div className="outputfield">
            <div className="of-area">
                <textarea
                    className="of-output"
                    readOnly
                ></textarea>
            </div>
        </div>
    )
}



export default OutputField