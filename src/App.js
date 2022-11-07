import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import { useState } from 'react';
import UseEffect from './components/UseEffect';
import InputText from './components/InputText';

function App() {

  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div
        style={
          { display: 'flex', 
            flexDirection: 'column', 
            width: '200px'
          }
        } //Estilos directos
      >
        <InputText
          name={'Nombre'}
          placeholder={'Ingrese nombre'}
        />
        <InputText
          name={'Apellido'}
          placeholder={'Ingrese Apellido'}
        />
        <InputText
          name={'Correo'}
          type={'email'}
          placeholder={'Ingrese Correo'}
        />
        <InputText
          name={'Password'}
          type={'password'}
          placeholder={'Ingrese Password'}
        />
        <InputText
          name={'Fecha'}
          type={'date'}
          placeholder={'Ingrese Fecha'}
        />
      </div> 
    </div>
  );
}

export default App;
