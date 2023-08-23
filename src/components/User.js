import { useState } from "react";

const User = (props) => {

    const { name, location } = props;
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
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