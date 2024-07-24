import React, { useEffect, useState } from 'react'

export default function Hook1() {
    const [number,setNumber]=useState(1);
    const [numberb,setNumberb]=useState(1);
    const [count,setCount]=useState(1);
    useEffect(() => {
        const timer =setInterval(()=>{
            setCount((preState)=>preState+1);
        },1000);
        return ()=>{
            clearInterval(timer);
        } 
        
       
    },[]);
    
  return (
    <div>

    <p>{count}</p>


<button onClick={()=>setNumber(number+1)} > tang</button>
<button onClick={()=>setNumberb(numberb+1)} > tang</button>

    </div>
  )
}

