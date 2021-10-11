import './App.css';
import NavBar from './components/nav/navbar';
import Select from './sections/select/select';
import Export from './sections/export/export';
import Cargo from './sections/cargo/cargo';
import Additional from './sections/additional/additional';
import { ArrowLeft } from 'phosphor-react';

function App() {

  

  return (
    <div className="app">
        <NavBar />
        <div className="mainContent">

          <div className="container">
            
            <div className="arrowleft">
              <ArrowLeft color="#000" size={28} weight="bold"/>
            </div>
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