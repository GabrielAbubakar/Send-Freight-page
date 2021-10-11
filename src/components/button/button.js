import React from "react";
import './button.css';


const Button = (props) => {

    return (

        <a href="#" className="nav-button" style={{backgroundColor: props.color, border: props.border}}>{props.value}</a>
    )
}

export default Button;