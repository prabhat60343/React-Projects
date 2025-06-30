/*import React, { useState } from 'react';
import './index.css';
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
      });
    } else {
      alert("No password to copy!");
    }
  };
  

  const generatePassword = useCallback(() => {
    let password = '';
    const numbers = '0123456789';
    const characters = '~!@#$%^&*()_+';
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) base += numbers;
    if (charAllowed) base += characters;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * base.length);
      password += base[randomIndex];
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">🔐 Password Generator</h1>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-6 bg-blue-100 p-4 rounded-xl shadow-md">
        <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl">
          <label>Password Length: {length}</label>
          <input
            type="range"
            
            max="50"
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
              setPassword('');
            }}
          />
        </div>

        <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl">
          <label>Include Number:</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => {
              setNumberAllowed(e.target.checked);
              setPassword('');
            }}
          />
        </div>

        <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl">
          <label>Include Special Character:</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => {
              setCharAllowed(e.target.checked);
              setPassword('');
            }}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mb-6">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
        onClick={generatePassword}
      >
        Generate
      </button>
        {password && (
          <div className="flex flex-row items-center justify-center gap-4 mb-6">
            <div className="text-xl bg-white px-6 py-3 rounded-lg shadow-md text-center font-mono">
              {password}
            </div>

            <button
              onClick={copyToClipboard}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Copy
            </button>
          </div>
        )}

      
      </div>
    </div>
  );
}

export default App;
*/ 
import React, { useRef, useCallback } from 'react';
import usePasswordGenerator from './hooks/usePasswordGenerator';
import useTheme from './hooks/useTheme';

function App() {
  const {
    password,
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    charAllowed,
    setCharAllowed,
  } = usePasswordGenerator();

  const { theme, toggleTheme } = useTheme();

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
