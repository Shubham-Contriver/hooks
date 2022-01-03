import React, {useState, useEffect}  from 'react'
import axios from 'axios'
export const CheckDb = () => {
    const [data, setData] = useState("hello");
    const handleClicked = () => {
      
    }
    useEffect(()=>{
        axios.get("http://localhost:3500/personal").then((response) => {
            setData(response.data.map((d) => 
            <div key={d.name}>
            <h1>{d.name}</h1>
            <h1>{d.age}</h1>
            <h1>{d.password}</h1>
            </div>
            ));
        })
    })
    return (
        <div>
         <h1>Hi</h1>
          {data}
         <button onClick={handleClicked}>Click</button>
        </div>
    )
}
