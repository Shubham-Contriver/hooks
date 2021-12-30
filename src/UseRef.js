import React, { useRef } from 'react'

export const UseRef = () => {
    const inputType = useRef(null);
    const onClick = () => {
        inputType.current.focus();
    }
    return (
        <div>
            <h1>HI</h1>
            <input type = "text" palceholder="Ex...." ref={inputType}  />
            <button onClick={onClick}>Click</button>
        </div>
    )
}
