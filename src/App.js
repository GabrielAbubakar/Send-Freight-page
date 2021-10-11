import './App.css';
import NavBar from './components/nav/navbar';
import Info from './assets/info.svg';
import ServiceCard from './components/serviceCard/serviceCard';
import Slider from './components/slider/slider';

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


            <section className="select">
              <h2>Select a service</h2>
              <div className="card-container">
                
                <ServiceCard title="Air Freight" />
                <ServiceCard title="Sea Freight" />
                <ServiceCard title="Inland (Truck and Barge)" />
                <ServiceCard title="Customs Clearance" />
              
              </div>
            </section>

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

            <section className="cargo">
              <div className="cargo__header">
                <h2>Cargo Details</h2>
                <Slider />
                <p><span>Dangerous Cargo</span> (ex. Chemicals, Battery)</p>
              </div>
            </section>

          </div>

        </div>
    </div>
  );
}

export default App;
