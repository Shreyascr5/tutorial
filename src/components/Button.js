import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button=forwardRef((props,ref)=>{
    const[toggle,setToggle]=useState(true);
    useImperativeHandle(ref,()=>({
     alertToggle(){
            setToggle(!toggle);
        }
    }))

    return(
        <>
            <button>Child button</button>
            {toggle &&  <span>Toggle</span>}

        </>
    )
});
export default Button;