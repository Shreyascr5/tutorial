import React, {useRef, useState} from "react";  

export default function Ref(){
    const[disp,setDisp]=useState("Name");
    let ip;
    const inputRef=useRef(null);
    function onClick(){
        console.log(inputRef.current.value);
        inputRef.current.focus();
        ip=inputRef.current.value;
        setDisp(ip);
        inputRef.current.value=("")
    }
    return(
        <>  
            <h2>{disp}</h2>
            <input type="text" placeholder="name.." ref={inputRef} />
            <button onClick={onClick}>Change name</button>
        </>
    )
}