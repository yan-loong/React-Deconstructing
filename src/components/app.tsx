import React, { useState } from "../react/react";

const App = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Name */}
      <div>
        <div>Enter Name and press Enter</div>
        <input
          type="text"
          placeholder="First name"
          value={name}
          onchange={(e) => setName(e.target.value)}
        />
        <h1>Hello {name}</h1>
      </div>

      {/* Counter */}
      <div>
        <button onclick={(e) => setCount(count + 1)}>+1</button>
        <button onclick={(e) => setCount(count - 1)}>-1</button>
        <h2>{count}</h2>
      </div>
    </>
  );
};

export default App;
