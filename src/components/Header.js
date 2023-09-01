import { useState } from "react"
import { APP_LOGO } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    console.log("header re-rendered")
    const status = useOnlineStatus();
    return <div id="header" className="flex justify-between items-center bg-sky-300">
        <img className="m-4 p-4 w-40 h-fit" src={APP_LOGO}></img>
        <nav className="">
            <ul className="flex justify-evenly">
                <li className="mx-3">Online: {status ? "true":"false"}</li>
                <li className="mx-3 cursor-pointer"><Link to="/">Home</Link></li>
                <li className="mx-3 cursor-pointer"><Link to="/about">About Us</Link></li>
                <li className="mx-3 cursor-pointer"><Link to="/contact">Contact</Link></li>
                <li className="mx-3 cursor-pointer"><Link to="/lazy">Lazy Component</Link></li>
                <li className="mx-3 cursor-pointer">Cart</li>
                <li className="mx-3 cursor-pointer"><button onClick={()=> {loginBtn === "Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button></li>
            </ul>
        </nav>
    </div>
}