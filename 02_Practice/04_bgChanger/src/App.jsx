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

  const colors = [
    { text: "Red", color: "#FF4444" },
    { text: "Green", color: "#00CC66" },
    { text: "Blue", color: "#3399FF" },
    { text: "Purple", color: "#9933FF" },
    { text: "Orange", color: "#FF9933" }
  ];

  return (
    <div className="w-full h-screen duration-200 p-0 flex flex-col justify-between py-12" style={{ backgroundColor: color }}>
      <div className="flex flex-col flex-wrap justify-center inset-x-0 px-2 gap-8">
        <h2
          className="shadow-lg rounded-3xl w-fit self-center text-lg p-3 pl-5 pr-5 bg-gray-500 hover:bg-gray-700 hover:cursor-pointer">
          Background Color - Toggle
        </h2>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-fit self-center">
          {
            colors.map(({ text, color }) => (
              <button
                key={color}
                className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              >{text}</button>
            ))
          }
        </div>
        <p className="w-fit self-center text-white">Current Color: <span className='outline-none px-4 py-1 rounded-full shadow-lg' style={{color: color, backgroundColor: "black"}}>{color}</span></p>
      </div>
      <div className='flex flex-wrap justify-center bottom-2'>
        <button
          className='text-md rounded-full w-fit px-5 py-1 shadow-lg bg-black text-white'
          onClick={() => setColor('#2b2b2b')}
        >Reset</button>
      </div>
    </div>
  )
}

export default App
