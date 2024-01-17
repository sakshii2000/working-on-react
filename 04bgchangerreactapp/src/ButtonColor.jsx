import { useState } from 'react'

function ButtonColor({color}) {

  return (
    <button onClick= {changeBackground}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: color}}>{color}</button>
  )
}

export default ButtonColor