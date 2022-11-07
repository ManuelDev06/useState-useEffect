import React from 'react'

//Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

const InputText = ({name,placeholder,type}) => { //Entre parentesis son las props
  return (
    <>
        <label style={{color: 'red'}}>{name}</label>
        <input
            type={type}
            placeholder={placeholder}
        />
    </>
  )
}

export default InputText

// Escribir "rafce" te autogenera el componente
