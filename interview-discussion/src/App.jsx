import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
 // const [multipliedValue, setMultipliedValue] = useState(0)
let multipliedValue = value*5

  const multipliedByFive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      <h1> Original Value:{value}</h1>
      <button onClick={multipliedByFive}>Multiply By 5</button>
      <br/>
      <h2>Multiplied Value:{multipliedValue} </h2>
     
    </>
  )
}

export default App
