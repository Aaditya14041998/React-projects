import {useState} from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
    counter += 1
    console.log('Counter Value : ', counter)
    setCounter(counter)
  }

  const removeValue = () => {
    counter -= 1
    console.log('Counter Value : ', counter)
    setCounter(counter)
  }
  
  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue} disabled={counter >=20 }>Add Value</button>
      <br/>
      <button onClick={removeValue} disabled={ counter <= 0}>Remove Value</button>
    </>
  )
}

export default App
