import { useState } from "react";
import "./App.css";
import Bgchanger from "./components/bgchanger.jsx";
import Card from "./components/card.jsx";

function App() {
  let myObj={
    username:"hp",
    age:21
  }

  

  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind</h1>
    <Card channel="hp5cd" someObj={myObj} />
      
      <Bgchanger/>
      

    </>
  );
}

export default App;
