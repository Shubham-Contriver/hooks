import React, {useEffect, useState} from 'react'
import axios from 'axios'
export const UseEffect = () => {

const [data, setData] = useState("")    
useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/comments").then(
    (response) => {
        setData(response.data[0].email)
    }
)
    }, [])
    return(
        <>
    <h1>Hello{data}</h1>
        </>
    )
}