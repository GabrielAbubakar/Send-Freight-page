import React from "react";
import './serviceCard.css';


const ServiceCard = (props) => {

    return (
        <div className="service-card">
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}

export default ServiceCard