import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./reactLogo.png";

const Header = () => {
    return (<div id="header">
        <div >
            <img id="logo" src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" />

        </div>
        <div id="searchBar">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Search</button>
        </div>
        <div id="profile">
            Profile icon
        </div>
    </div>)
}
const Body = ()=>{
    return <div id="body">Body</div>
}
const Footer = ()=>{
    return <div id="footer">Footer</div>
}
const MainPage = () => {
    return (<div id="container">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainPage />)