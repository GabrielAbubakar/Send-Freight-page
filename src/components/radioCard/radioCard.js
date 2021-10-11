import React from "react";
import Slider from "../slider/slider";
import './radioCard.css'


const RadioCard = (props) => {

    return (
        <div className="radio-card">
            <Slider />
            <div>
                <h3>{props.title}</h3>
                <p>
                    {props.body}
                </p>
            </div>
        </div>
    )
}


export default RadioCard