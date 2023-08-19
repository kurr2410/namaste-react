import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")
    return <div id="header">
        <img className="logo" src={APP_LOGO}></img>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Change Location</li>
                <li>Cart</li>
                <li><button onClick={()=> {loginBtn === "Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button></li>
            </ul>
        </nav>
    </div>
}