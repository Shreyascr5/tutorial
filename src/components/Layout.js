import React, { useEffect, useLayoutEffect }  from "react";

//useLayoutEffect always called before the useEffect hook ; in the sense it is called during the initial stages of the page rendering ;

export default function Layout(){
    useLayoutEffect(()=>{
        console.log("layout effect");
    
    },[]);
    useEffect(()=>{
        console.log('effect');
    },[])
    return(    
        <></>
    )
}