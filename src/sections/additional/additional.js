import React from "react";
import RadioCard from "../../components/radioCard/radioCard";
import './additional.css'


const Additional = () => {

    return (
        <section className="additional">
            <h2>Additional Services</h2>

            <div className="flex">
            <div className="left">
                <RadioCard title="Export Fowarding" body="We handle customs clearance and documentation"/>
                <RadioCard title="Import Customs Clearance" body="We handle import customs and regulatory requirements"/>
            </div>

            <div className="right">
                <RadioCard title="Cargo Insurance" body="Protect your cargo from logistics risks up to its full value"/>
                <RadioCard title="Transport / Delivery" body="We deliver the cargo to your door step from the ports"/>
            </div>
            </div>
        </section>
    )
}

export default Additional