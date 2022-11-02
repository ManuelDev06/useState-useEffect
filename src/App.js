import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import { useState } from 'react';

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
    </div>
  );
}

export default App;
