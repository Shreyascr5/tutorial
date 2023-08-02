import React, { useRef } from "react";
import Button from "./Button";

//used to control a child component from the parent component itself ;

export default function ImparitiveHandle(){
    const buttonRef=useRef(null);
    return(
        <>
            <button onClick={()=>{
                buttonRef.current.alertToggle()
            }} >Parent button</button>
            <Button ref={buttonRef}/>
        </>
    )
}