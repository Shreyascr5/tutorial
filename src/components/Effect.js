import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Effect() {
    const[data,setData]=useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((respone) => {
        setData(respone.data[0].email);
        console.log("API was called");
      });
  },[]); 
//   the square braces in the useEffect helps to stop rerender the api or particular thing used in the useEffect.
//Axios is mainly used for API calls, best way to call an api fetch data from them;

  return (
    <>
      <h1>Hello world!</h1>
      <h2>{data}</h2>
    </>
  );
}
