import React, { useState } from 'react';
import "../index.css";
export default function Usehook() {
    const [count, setcount] = useState(0)

   const handlerncrease = (event) =>{
    event.stopPropagation();
    setcount( count + 1);

   }

   const handlerdecress = (event) =>{
    setcount(count - 1);

   }

   const handlerReset = () => {
    setcount((count) => {return count = 0})
   }
  return (
    <div>
        <h1>count: {count}</h1>
      <button className = "btn" onClick={handlerncrease} disabled={count === 5 ? true : false}>Increase</button>
      <button className = "btn" onClick={handlerdecress}
      disabled={count === -5 ? true : false}>Decrease</button>
      <button className = "btn" onClick={handlerReset}>Reset</button>
    </div>
  )
}

