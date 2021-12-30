import React, { useEffect, useLayoutEffect, useRef } from 'react'

export const UseLayoutEffect = () => {
    const inputRef = useRef(null)
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    })
    useEffect(() => {
        inputRef.current.value = "Morning"        
    })
    return (
        <div style={{width: 400, height:100}}>
            <input type="text" value="Hello" ref={inputRef} />
        </div>
    )
}
