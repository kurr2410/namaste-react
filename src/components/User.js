import { useEffect, useState } from "react";

const User = (props) => {

    const { name, location } = props;
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // we can't use async callback for useEffect because it expects the callback function to return either a clean-up function or nothing at all. Because of its callback function's asynchronous execution and non-blocking nature.
    // we can create a separate async function and call it inside the callback function.
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("this is functional timer")
        },1000);
        // this return can act as componentWillUnmount() lifecycle in functional components
        // this return will be called at last when component gets unmounted/removed.
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h3>Count1: {count1}</h3>
            <h3>Count2: {count2}</h3>
        </div>
    )
}

export default User;