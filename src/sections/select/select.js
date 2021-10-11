import React from "react";
import ServiceCard from "../../components/serviceCard/serviceCard";
import './select.css';


const Select = () => {
    
    return (
        <section className="select">
            <h2>Select a service</h2>
              <div className="card-container">
                
                <ServiceCard title="Air Freight" />
                <ServiceCard title="Sea Freight" />
                <ServiceCard title="Inland (Truck and Barge)" />
                <ServiceCard title="Customs Clearance" />
              
              </div>
        </section>
    )
}

export default Select