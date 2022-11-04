import React, {useEffect, useState} from 'react'

const UseEffect = ({name}) => {
  const [multicar, setMultiplicar] = useState(0);

  //Se ejecuta una sola vez  al crear o inicializar un componente o una pagina
  useEffect(() => {
    setMultiplicar(name + 2);
    return () => console.log('destruido')
  },[name]) //Disparador
  // Si esta vacio se va a ejecutar una sola vez
  // Si tiene un estado se va ejecutar cada vez que el estado cambie

  return (
    <div>UseEffect: {multicar}</div>
  )
}

export default UseEffect