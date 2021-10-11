import React from "react";
import Info from '../../assets/info.svg';
import './export.css';



const Export = () => {

    return(
        <section className="export">
            <img src={Info} alt="info icon" className="info__logo" />
                <div className="export__topbar">

                  <div className="export__intro">
                    <p>Import</p>
                    <p>Export</p>
                  </div>

                  <div className="input__box">
                    <p>From</p>
                    <input type="text" placeholder="City or port" />
                  </div>
                  <div className="input__box">
                    <p>To</p>
                    <input type="text" placeholder="City or port" />
                  </div>
              
                </div>

                <div className="export__footbar">
                  <input type="text" placeholder="Ready Date" />
                  <select name="" id="">
                    <option value="Incoterms">Incoterms</option>
                  </select>
                  <input type="text" placeholder="Total Cargo Value" />
                </div>
        </section>
    )
}

export default Export