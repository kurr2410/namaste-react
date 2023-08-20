import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
import { Link } from "react-router-dom"
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    return <div id="header">
        <img className="logo" src={APP_LOGO}></img>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><button onClick={()=> {loginBtn === "Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button></li>
            </ul>
        </nav>
    </div>
}