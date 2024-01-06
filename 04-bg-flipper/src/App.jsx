import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')
  
/*   function flipColor(color) {
    setColor(color)
  } */

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <h3 className='font-semibold px-96 py-64 font-sans text-3xl'>Build a Vibgyor</h3>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('violet')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-violet-700'>Violet</button>
          <button onClick={() => setColor('indigo')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-indigo-700'>Indigo</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-700'>Blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-700'>Green</button>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-700'>Yellow</button>
          <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-orange-700'>Orange</button>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-700'>Red</button>
        </div>
      </div>
    </div>
  )
}

export default App
