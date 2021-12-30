import React, { useState } from 'react'

export const UseImpretiveHandle = () => {
    const[toggle, setToggle] = useState(false)
    const showToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <button style={{width:80,height:50, backgroundColor:"Orange", borderRadius:10}}
             onClick={showToggle}>Click</button>
            <h1 >{toggle && "Hello there"}</h1>
        </div>
    )
}
