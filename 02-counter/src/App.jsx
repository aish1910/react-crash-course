import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(15)
 // let counter = 15

  const addValue = () => {
    setCounter(counter+1)
    
    // React internally bundles all func calls and understands that there is only one func with the same params called again, hence state will be updated just once here
    /* setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1) */

    // Use React callback function to update state multiple times within the same fucntion
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)

    console.log(counter);
  }

  const removeValue = () => {
    setCounter(counter-1)
    console.log(counter);
  }

  return (
    <>
      <h1>React crash course</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
