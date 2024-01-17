import { useState } from 'react'
import ButtonColor from './ButtonColor'

function App() {
  const [colour, setColour] = useState("olive")

  function changeBackground(){
    setColour
  }

  return (
    <div className='w-full h-screen duration-200'style={{backgroundColor: colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <ButtonColor color="red"/>
        <ButtonColor color = "green"/>
        <ButtonColor color="blue"/>
        <ButtonColor color = "olive"/>
        <ButtonColor color="gray"/>
        <ButtonColor color = "yellow"/>
        <ButtonColor color="pink"/>
        <ButtonColor color = "purple"/>
        <ButtonColor color="lavender"/>
        <ButtonColor color = "white"/>
        <ButtonColor color="black"/>

        </div>
      </div>
    </div>
  )
}

export default App
