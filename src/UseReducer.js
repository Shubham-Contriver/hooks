import React, {useReducer} from 'react'

const reducer = (state, action) => {
switch(action.type){
    case "INCREMENT" :
        return{count : state.count + 1, showText : state.showText };
        case "SHOWTEXT" :
            return{count : state.count, showText : !state.showText};
            default :
             return state ;
}
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0, showText : true})
    return(
        <>
        {state.count}
        <button onClick = {() => {
            dispatch({type : "INCREMENT"});
            dispatch({type : "SHOWTEXT"})
        }}>Click</button>
     {state.showText && "this is text"}
        </>
    )
}