import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'
import "./App.css"

export const UseState = () => {

const [counter, setCounter] = useState(0);

const increment = () =>{
setCounter(counter + 1);
}
    return (
        <div>
{counter} <button onClick = {increment}>Increment</button>
        </div>
    )
}
export const Changes = () => {
    const [value, setValue] = useState("Start");

const clicked = (event) => {
    setValue(event.target.value);
}
return(
    <>
    {value}<input type="text" placeholder='write here...' onChange={clicked}/>
    </>
)

}