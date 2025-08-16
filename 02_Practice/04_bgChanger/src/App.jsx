import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#2b2b2b');

  const colors = [
    { text: "Red", color: "#FF4444" },
    { text: "Green", color: "#00CC66" },
    { text: "Blue", color: "#3399FF" },
    { text: "Purple", color: "#9933FF" },
    { text: "Orange", color: "#FF9933" }
  ];

  // Toggle color with keyboard Keys
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "r") setColor("#FF4444");
      if (e.key === "g") setColor("#00CC66");
      if (e.key === "b") setColor("#3399FF");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
        <p className="w-fit self-center text-white">Current Color: <span className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ color: color, backgroundColor: "black" }}>{color}</span></p>
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
