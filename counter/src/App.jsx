import { useState } from "react";

function App() {
 
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1); 
    console.log("Counter Value: ", counter);
  };

  const subValue = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Counter Value: ", counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
          <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Subtract Value</button>
      
    </>
  );
}

export default App;
