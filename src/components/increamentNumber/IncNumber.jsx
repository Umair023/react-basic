import React, { useState } from 'react'
import './IncNumber.css';


const IncNumber = () => {
    
    // distructing array 
    let [count,setCount]=useState(0);
    
    
    let incNbr=()=>{
        setCount(count+1);
          console.log('click',count++);    
    }
  
    let myarray=['monday','tuesday','wednesday','thursday','friday','saturday','Sunday']
        let [day,setDay]=useState(0);
    let myday=()=>{
        
        let daycount=(day+1) % myarray.length;
        console.log(myarray[daycount]);
        setDay(daycount);
        console.log('btn clicked')
    }

  return (
    <div>
      <>
      <div style={{textAlign:'center', marginTop:'15px'}}>
      <h1>{count}</h1>
      <button onClick={incNbr}>Click Me</button>
      </div>
      <div style={{textAlign:'center', marginTop:'15px'}}>
        <h1>{myarray[day]}</h1>
        <button onClick={myday}>Click me</button>
      </div>
      </>
    </div>
  )
}

export default IncNumber
