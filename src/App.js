import './App.css';
import NavBar from './components/nav/navbar';
import Info from './assets/info.svg';
import ServiceCard from './components/serviceCard/serviceCard';
import Slider from './components/slider/slider';
import RadioCard from './components/radioCard/radioCard';
import Select from './sections/select/select';
import Export from './sections/export/export';
import Cargo from './sections/cargo/cargo';
import Additional from './sections/additional/additional';

function App() {

  

  return (
    <div className="app">
        <NavBar />
        <div className="mainContent">

          <div className="container">
            
            <header>
              <h1>New Booking</h1>
              <p>
                Fill in the information below to get a quote or create a new booking
              </p>
            </header>

            <Select />
            <Export />
            <Cargo />
            <Additional />

          </div>

        </div>
    </div>
  );
}

export default App;































// <section className="select">
// <h2>Select a service</h2>
// <div className="card-container">
  
//   <ServiceCard title="Air Freight" />
//   <ServiceCard title="Sea Freight" />
//   <ServiceCard title="Inland (Truck and Barge)" />
//   <ServiceCard title="Customs Clearance" />

// </div>
// </section>

// <section className="export">
//   <img src={Info} alt="info icon" className="info__logo" />
//   <div className="export__topbar">

//     <div className="export__intro">
//       <p>Import</p>
//       <p>Export</p>
//     </div>

//     <div className="input__box">
//       <p>From</p>
//       <input type="text" placeholder="City or port" />
//     </div>
//     <div className="input__box">
//       <p>To</p>
//       <input type="text" placeholder="City or port" />
//     </div>

//   </div>

//   <div className="export__footbar">
//     <input type="text" placeholder="Ready Date" />
//     <select name="" id="">
//       <option value="Incoterms">Incoterms</option>
//     </select>
//     <input type="text" placeholder="Total Cargo Value" />
//   </div>

// </section>

// <section className="cargo">
// <div className="cargo__header">
//   <h2>Cargo Details</h2>
//   <Slider />
//   <p><span>Dangerous Cargo</span> (ex. Chemicals, Battery)</p>
// </div>

// <div className="cargo__button">
//   <button onClick={buttonClick}>Total Dimensons</button>
//   <button>Package Details</button>
// </div>

// <div className="measurements">
//   <div className="measurements__input-box">
//     <label htmlFor="volume">
//       Total Volume
//     </label>
//     <input type="number" /><span>cbm</span>
//   </div>
//   <div className="measurements__input-box">
//     <label htmlFor="weight">
//       Total Weight
//     </label>
//     <input type="number" /><span>kg</span>
//   </div>
// </div>
// </section>


// <section className="additional">
// <h2>Additional Services</h2>

// <div className="flex">
//   <div className="left">
//     <RadioCard title="Export Fowarding" body="We handle customs clearance and documentation"/>
//     <RadioCard title="Import Customs Clearance" body="We handle import customs and regulatory requirements"/>
//   </div>

//   <div className="right">
//     <RadioCard title="Cargo Insurance" body="Protect your cargo from logistics risks up to its full value"/>
//     <RadioCard title="Transport / Delivery" body="We deliver the cargo to your door step from the ports"/>
//   </div>
// </div>

// </section>