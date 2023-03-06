import React, { useEffect, useState } from "react";

function Counter() {
  // current state value and a function that lets you update it
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   // update the document title using browser API
  //   document.title(`You clicked${count}times`)
  // })
  return (
    <div>
      <p>You clicked{count}times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
