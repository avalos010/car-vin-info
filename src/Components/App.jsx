import React, { useState } from 'react'
import getVinInfo from '../Api/api'
import Search from './Search';
import VinInfo from './VinInfo';

function App() {
  const [info, setInfo] = useState({})
  const searchVin = (vin) => {
    getVinInfo(vin).then(data => setInfo(data.data))
  }


  return (
    <div className="App">
      <Search searchVin={searchVin} />
      <VinInfo info={info} />
    </div>
  );
}

export default App;
