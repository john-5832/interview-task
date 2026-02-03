import { useState , useEffect } from "react";

function UseDebounce(value,delay){
    const[debounced, SetDebounced]= useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            SetDebounced(value);
        },delay);

        return ()=>{
            clearTimeout(timer);
        };
    },[value,delay]);

    return debounced;
}

export default UseDebounce;