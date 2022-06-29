import './App.css';
import './Table'
import house from './noun-house@2x.png';
import create from './noun-plus@2x.png';
import monthreview from './noun-agenda@2x.png';
function App() {
  return (
    <div>
      <div class="armygrid">
        <p id="headerpic"></p>
        <p class="armymed-1">ARMY <tspan class="armymed-2">MEDICINE</tspan></p>
        <hr class="armybar" size="2px" width="150px"></hr>
        <p id="armyscarb">SCARB REVIEW</p>
      </div>
      <div class="topnav">
        <a href="home"> <img alt="HOME" src={house} width="13" /> HOME</a>
        <a href="create"><img alt="CREATE" src={create} width="11" /> CREATE</a>
        <a href="monthreview"><img alt="REVIEW" src={monthreview} width="12" /> SCARB MONTHLY REVIEW SCHEDULE</a>
      </div>
    </div>
  );
}

export default App;
