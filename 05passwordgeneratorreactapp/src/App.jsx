import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)

  const [number, setNumber] = useState(false)

  const [character, setcharacter] = useState(false)

  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789" 
    if (character) str += "!@#$%^&*()-_=+[]{}|;:',.<>/?`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, number, character, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordgenerator()}, [length, number, character, passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-xl text-center text-white my-3' >password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox"
             defaultChecked={number}
             id='numberInput'
             onChange={() => {setNumber((prev) => !prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            id='characterId'
            defaultChecked={character}
            onChange={() => {setcharacter((prev) => !prev)}} 
            />
          </div>
          <label htmlFor='characterId'>Charachers</label>
        </div>
      </div>
    </>
  )
}

export default App
