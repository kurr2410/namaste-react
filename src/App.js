import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return <div id="applayout">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element: <About/>
    },
    {
        path:"/contact",
        element: <Contact/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)