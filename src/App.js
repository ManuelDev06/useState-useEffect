import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import { useState } from 'react';
import UseEffect from './components/UseEffect';

function App() {

  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  return (
    <div className="App"> 
      <UseState
        name={count}
        text={'Hola'}
      />
      <button
        onClick={incrementar}
      >Incrementar</button>
      <br/>
      <label>UseEffect</label>
      <UseEffect
        name={count}
      />
    </div>
  );
}

export default App;
