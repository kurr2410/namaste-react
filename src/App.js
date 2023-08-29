import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { RestaurantDetails } from "./components/RestaurantDetails";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import LazyLoadingComponent from "./components/LazyLoadingComponent";

const AppLayout = () => {
    return <div id="applayout">
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
}

const LazyLoadingComponent = lazy(()=> import ("./components/LazyLoadingComponent"))
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantDetails/>
            },
            {
                path:"/lazy",
                element:
                <Suspense fallback = {<h2>Loading Lazzzzzzzzzzy....</h2>}>
                <LazyLoadingComponent/>
                </Suspense>
            }
        ],
        errorElement:<Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)