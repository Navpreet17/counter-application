import { useState } from "react";

export function Counter({ count, setCount, getChildValue }) {
  const [value, setValue] = useState("test");

  const handleCounter = (name) => {
    if (name === "inc") {
      setCount(count + 1);
    } else if (name === "dec" && count > 0) {
      setCount(count - 1);
    } else if (name === "reset") {
      setCount(0);
    }
    // let _name = e.target.name;
  };

  return (
    <div>
      <button
        type="button"
        name="inc"
        className="btn btn-outline-success"
        onClick={() => {
          handleCounter("inc");
        }}
      >
        Increase
      </button>
      <button
        type="button"
        name="dec"
        className="btn btn-outline-primary"
        onClick={() => handleCounter("dec")}
      >
        Decrease
      </button>
      <button
        type="button"
        name="reset"
        className="btn btn-outline-danger"
        onClick={() => handleCounter("reset")}
      >
        Reset
      </button>
    </div>
  );
}
