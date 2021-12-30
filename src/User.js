import React, {useContext} from 'react'
import {AppContext} from "./UseContext"

export const User = () => {
    const {userName} = useContext(AppContext)
    return (
        <div>
            {userName}
        </div>
    )
}
