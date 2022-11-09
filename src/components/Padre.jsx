import React from 'react'

const Padre = (props) => {
  return (
    <div>
        <header>

        </header>
        <div className='sidebar'>
          <label>SideBar</label>
        </div>
        {props.children}
    </div>
  )
}

export default Padre