import logo from './logo.svg';
import './App.css';
import { Changes, UseState } from './UseState';
import { UseReducer } from './UseReducer';
import { UseEffect } from './UseEffect';
import { UseRef } from './UseRef';
import { UseLayoutEffect } from './UseLayoutEffect';
import { UseImpretiveHandle } from './UseImpretiveHandle';
import { UseContext } from './UseContext';
import { GitTry } from './GitTry';
import {CheckDb} from "./CheckDb";

function App() {
  return (
    <div className="App">
      <CheckDb/>
     
    </div>
  );
}

export default App;
