import React from 'react'
import { useState } from 'react';
function Contacts() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <>
  <h1>Contacts</h1>
  <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  </>
}

export default Contacts



  

 

 
    
  
}