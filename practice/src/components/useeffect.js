import React, { useEffect, useState } from "react";

function Component() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(prevState => prevState + 1);
  }
  //   only run during the mounting phase
  // whenever the page loads for the first time-->mounting phase
//   useEffect(() => {
//     console.log("mounting");
//   }, []);
// }
// // updating-->whenevr a particular data has to update
// useEffect(() => {
//   console.log("updating");
// }, [count]);
// unmounting-->only a certain component is destroyed only at that
// clean up function
useEffect(() => {
  return () => {

  };
},[count]);

return (
  <div>
    <button className="btn-btn primary" onClick={() => incrementCount()}>
      Increment Count
    </button>
    <h2>{count}</h2>
    
  </div>
);
}
export default Component;
