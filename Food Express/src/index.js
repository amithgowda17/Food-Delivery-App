import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Contact } from "./components/Contact Us";
import { RestaurantMenu } from "./components/RestaurantMenu";
import {About} from "./components/About";
import { Error } from "./components/Error"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";

const Grocery=lazy(() => import("./components/Grocery"));

const Aplication = () => {
    return(
        <div>
            <Header/>
            <Outlet />
        </div>
    );
};


const NewRouter = createBrowserRouter([
    {
            path:"/",
            element:<Aplication />, 
            children:[
                {
                    path:"/",
                    element:<Body />,
                },
                {
                    path:"/about",
                    element:<About />,
                },
                {
                    path:"/contactus",
                    element:<Contact />,
                },
                {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu />,
                },
                {
                    path:"grocery",
                    element:<Suspense><Grocery /></Suspense>,
                },
            ],
            errorElement:<Error />,
       
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={NewRouter} />);

