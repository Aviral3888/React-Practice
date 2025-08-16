import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const cardImageSrc = "https://plus.unsplash.com/premium_photo-1690372791935-3efc879e4ca3?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [testUsername, setTestUsername] = useState('Test User Name');

  const updateUsername = (value) => {
    setTestUsername(value);
  }

  return (
    <>
      <h2 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h2>
      <Card username={testUsername} onUpdateUsername={updateUsername} cardImageSrc={cardImageSrc} />
      <Card username='Ayush' role='Doctor' place='Lucknow' cardImageSrc={cardImageSrc} />
      <Card username='Jatin' role='Engineer' place='Bombay' cardImageSrc={cardImageSrc} />
    </>
  )
}

export default App
