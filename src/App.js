import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

const AppLayout = () => {
    return <div id="applayout">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)