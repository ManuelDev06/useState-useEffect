import React from 'react'

// Una funcion flecha
const UseState = ({name,text}) => {

  console.log('Me rederize');
  return (
    <div>
        <label>{text}: </label>
        <label>{name}</label>
    </div>
  )
}

export default UseState