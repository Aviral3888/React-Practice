import { useEffect, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const [isUpperCaseAllowed, setIsUpperCaseAllowed] = useState(false);
  const [isLowerCaseAllowed, setIsLowerCaseAllowed] = useState(true);


  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (isUpperCaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowerCaseAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_{|}~`"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);
  }, [length, isNumberAllowed, isCharAllowed, isUpperCaseAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharAllowed, isUpperCaseAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef}
        />
        <button
          className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0'
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
            name=''
            id=''
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={isUpperCaseAllowed}
            onChange={() => {
              setIsUpperCaseAllowed((prev) => !prev);
            }}
            name=''
            id=''
          />
          <label htmlFor="uppercase">Uppercase Characters</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
            name=''
            id=''
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => {
              setIsCharAllowed((prev) => !prev);
            }}
            name=''
            id=''
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
