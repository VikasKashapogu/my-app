import React from "react";

function FormDemo(){
    let forms="FORM";

    return(
        <div>
            <h1 className="txt-success bg-primary txt-align-center">{forms}</h1>
            <label>Username</label>
            <input></input>
            <label>Phone Number</label>
            <input></input>
            <div>
                <button>Submit</button>

            </div>
        </div>
    )   
}
export default FormDemo;