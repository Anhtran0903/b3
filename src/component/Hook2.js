import React, { useEffect, useState } from 'react'

export default function Hook2() {

    const [width,setWidth]=useState(window.innerWidth)
    const [isActive,setIsActive]=useState(true)
useEffect(()=>{
    if(width<700){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
},[])


useEffect(()=>{
    const hand =()=>{
        setWidth(window.innerWidth)
        if(window.innerWidth<700){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }
    window.addEventListener("resize",hand)
    return ()=>{
        window.removeEventListener("resize",hand)
    }

  
},[])

  return (
    <div>
        
    <p>width :{width}</p>


<div className={isActive?" active nat":"nat"}></div>




    </div>
  )
}
