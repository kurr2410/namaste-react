import { useState, useEffect } from "react";
const useOnlineStatus = ()=>{
    const [status, setStatus] = useState(true);
console.log("useOnlineStatus called")
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            console.log("online status oflline")
            setStatus(false);
        });
        window.addEventListener("online",()=>{
            console.log("online status online")
            setStatus(true);
        })
        console.log("useEffect called")
    
    },[])
   return status; 
}

export default useOnlineStatus;