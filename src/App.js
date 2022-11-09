import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import {useState } from 'react';
import UseEffect from './components/UseEffect';
import InputText from './components/InputText';
import Padre from './components/Padre';

function App() {

  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  return (
    <div>
       <h1 className='titulo'>Hola a todos</h1>
       <h1 className='titulo otro'>Hola a todos</h1>
       <h2>Hola a todas</h2>
       <span className='description'>Esto es una desripcion</span>
    </div>
  );
}

export default App;
