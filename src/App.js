import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const getChildValue = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="brder">
        <h1>Counter Application</h1>
        <div>{count}</div>
        <Counter
          count={count}
          setCount={setCount}
          getChildValue={getChildValue}
        />
      </div>
    </div>
  );
}

export default App;
