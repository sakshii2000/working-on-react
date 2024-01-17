import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter < 20)
      setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter > 0)
      setCounter(counter -1)
  }

  return (
    <>
    <h1>sakshi b.</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
