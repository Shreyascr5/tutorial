import React, {useReducer} from "react";

function reducer(state,action){
    switch(action.type){
        case "increase":
            return{count:state.count+1,text:state.text};
            case "toggleText":
                return{count:state.count,text:!state.text};
                case "reset":
                    return{count:state.count,text:state.text}
                default:
                    return state;
    }
}
export default function ReducerTutorial(){
    const[state, dispatch]=useReducer(reducer,{count:0,text:true})
    return(
        <>
            {state.count}
            <button onClick={
                ()=>{
                    dispatch({type:"increase"});
                    dispatch({type:"toggleText"});
                }
            }>click</button>
            <button onClick-key={()=>{
                dispatch({type:"default"})
            }}>Reset</button>
            {state.text && <h1>This is a text</h1>}
        </>
    )
}
