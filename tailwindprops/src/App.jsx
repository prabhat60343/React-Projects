import { useState } from "react";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 100);

  const [color, setColor] = useState("#031e80");

  // Random Number Component State
  const [number, setNumber] = useState(1);
 

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
        style={{ backgroundColor: color }}
      >
        {/* Tailwind heading */}
        <h1
          style={{ color: color }}
          className="text-xl font-bold p-3 rounded-lg transition duration-[5000ms]"
        >
          Tailwind CSS
        </h1>
        <h1 className="text-3xl font-bold underline mt-4">Hello World!</h1>

        {/* Tailwind button with hover effect */}
        <button
          onClick={() => setColor(randomColor())}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        >
          Click Me
        </button>

        <p className="text-white font-bold text-xl">Current Color: {color}</p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center p-10 bg-gray-100 min-h-screen">
        <Card
          title="React Card"
          description="This is a simple reusable card component in React with Tailwind CSS."
          image="https://plus.unsplash.com/premium_photo-1734626880757-a107821e718e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Another Card"
          description="You can use this component multiple times with different props."
          image="https://images.unsplash.com/photo-1739382121445-19b3460a9e7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6" style={{ backgroundColor: color }}>
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4"><h1 className="text-3xl font-bold text-black mt-4">Random Number</h1></div>
  <h2 className="text-xl mt-2">Number: {number}</h2>

  {/* Multiply by 5 Button */}
  <button
    onClick={() => setNumber(number * 5)}
    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Multiply by 5
  </button>

  {/* Reset Button */}
  <button
    onClick={() => setNumber(generateRandomNumber())}
    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  >
    Reset
  </button>
</div>

    </>
  );
}

export default App;
