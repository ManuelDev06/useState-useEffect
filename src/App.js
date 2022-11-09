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
    <div className="App">
        <Padre>
          <InputText
            name={"HOLA"}
            placeholder="Escribe aqui"
          />
          <InputText
            name={"HOLA"}
            placeholder="Escribe aqui"
          />
          <InputText
            name={"HOLA"}
            placeholder="Escribe aqui"
          />
          <InputText
            name={"HOLA"}
            placeholder="Escribe aqui"
          />
        </Padre>
    </div>
  );
}

export default App;
