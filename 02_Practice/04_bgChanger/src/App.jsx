import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#2b2b2b');

  // One way of updating the color - a callback method that updates the color
  // const updateColor = (color) => {
  //   setColor(color);
  // }

  return (
    <div className="w-full h-screen duration-200 p-0" style={{ backgroundColor: color }}>
      <div className="flex flex-col flex-wrap justify-center top-12 inset-x-0 px-2 py-12">
        <h2 className="self-center text-2xl bg-gray-500 p-3 pl-5 pr-5 rounded-md mb-12 w-fit hover:bg-gray-700 hover:text-white hover:cursor-pointer">Background Changer</h2>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-fit self-center">
          <button
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-400'
            onClick={() => setColor('#FF4444')}
          >Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-400'
            onClick={() => setColor('#00CC66')}
          >Green</button>
          <button
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-400'
            onClick={() => setColor('#3399FF')}
          >Blue</button>
        </div>
      </div>

    </div>
  )
}

export default App
