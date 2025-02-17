import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [noallowed,setNoallowed]=useState(false)
 const [charallowed,setCharallowed]=useState(false)
const [password,setPassword]=useState("")

  return (
    <>
      <h1 className='outline-none rounded-full bg-white text-4xl w-21 h-20 border-l-orange-400-100 text-center text-black p-5 m-5'>Password Generator</h1>
    </>
  )
}

export default App
