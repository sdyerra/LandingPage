import './App.css';
import house from './noun-house@2x.png';
import create from './noun-plus@2x.png';
import monthreview from './noun-agenda@2x.png';
function App() {
  return (
    <div>
      <p id="headerpic"></p>
      <p class="armymed-1">ARMY <tspan class="armymed-2">MEDICINE</tspan></p>
      <div class="topnav">
        <a href="home"> <img alt="HOME" src={house} width="12" /> HOME</a>
        <a href="create"><img alt="CREATE" src={create} width="12" /> CREATE</a>
        <a href="monthreview"><img alt="REVIEW" src={monthreview} width="17" /> SCARB MONTHLY REVIEW SCHEDULE</a>
      </div>
      <div></div>
      <footer>
        <p id="footer">2017, USA Medcom Acquisition Process</p>
      </footer>
    </div>
  );
}

export default App;
