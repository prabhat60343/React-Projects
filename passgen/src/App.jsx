import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
   /* <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Password Generator</h1>
       <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-80">
        <label className="block">
          <span className="text-gray-700">Length:</span>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Include Numbers</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">Include Special Characters</span>
        </label>

        <button
          onClick={passwordgen}
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Generate Password
        </button>

        <p className="text-gray-800 text-center mt-4">
          <strong>Generated Password:</strong> {password}
        </p>
      </div>
    </div>
    </>*/
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-800 text-3xl font-bold'>
Password
    </div>
    </>
  );
}

export default App;
