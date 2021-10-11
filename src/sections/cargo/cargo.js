import React from "react";
import Slider from "../../components/slider/slider";
import './cargo.css';


const Cargo = () => {

    function buttonClick(e) {
      
      e.target.classList.toggle('active')
    }

    return (
        <section className="cargo">
            <div className="cargo__header">
                <h2>Cargo Details</h2>    
                <Slider />
                <p><span>Dangerous Cargo</span> (ex. Chemicals, Battery)</p>
            </div>

            <div className="cargo__button">
                <button onClick={buttonClick}>Total Dimensons</button>
                <button>Package Details</button>
            </div>

            <div className="measurements">
                <div className="measurements__input-box">
                  <label htmlFor="volume">
                    Total Volume
                  </label>
                  <input type="number" /><span>cbm</span>
                </div>
                <div className="measurements__input-box">
                  <label htmlFor="weight">
                    Total Weight
                  </label>
                  <input type="number" /><span>kg</span>
                </div>
            </div>
        </section>
    )
}


export default Cargo