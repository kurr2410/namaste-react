import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    console.log("header re-rendered")
    const status = useOnlineStatus();
    return <div id="header">
        <img className="logo" src={APP_LOGO}></img>
        <nav>
            <ul>
                <li>Online: {status ? "true":"false"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/lazy">Lazy Component</Link></li>
                <li>Cart</li>
                <li><button onClick={()=> {loginBtn === "Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button></li>
            </ul>
        </nav>
    </div>
}