import React from "react";

export default function Navbar({name,age,country}){
    return (
        <div className="nav">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{country}</h2>

        </div>
    )
}