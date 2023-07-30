import React, {useState} from "react";

export default function Name(){
    const [name, setName]=useState("Shreyas");
    function changeName(event){
        const newValue=event.target.value;
        setName(newValue);
    }
    return(
        <>
            <input type="text" placeholder="Enter your name..." onInput={changeName}/>
            <h2>{name}</h2>
        </>
    )
}