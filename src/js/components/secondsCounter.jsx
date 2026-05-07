import React from "react";

const SecondsCounter = (props) => {
    
    const timeString = props.seconds.toString()

    const time = timeString.padStart(6,"0")

    return <div className="d-inline-flex align-items-center counter-container box my-2 p-2 gap-3 rounded-4 text-white">
        <i className="fa-regular fa-clock font-size"></i>

        {
            time.split("").map((num,i) => {
                return(
                    <div key={i} className="digit-box box font-size p-2 rounded-4">{num}</div>
                )      
            })
        }    
    </div>
}



export default SecondsCounter;