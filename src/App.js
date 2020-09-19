import React , {susState} from 'react';
import Parent from './Parent'
import './App.css';
import Countercontext from './Countercontext';
import { useState } from 'react';
function App() {
  let countstate = useState(10)
  // let [count, setstate] = useState(10)

  return (
    <Countercontext.Provider value={countstate}>
      <div>
        <Parent name= "Nasik" />
      </div>
    </Countercontext.Provider>
  );
}

export default App;
