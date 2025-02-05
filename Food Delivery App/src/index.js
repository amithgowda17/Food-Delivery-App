import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Contact } from "./components/Contact Us";
import { RestaurantMenu } from "./components/RestaurantMenu";
import {About} from "./components/About";
import { Error } from "./components/Error"
import { Outlet,createBrowserRouter,RouterProvider } from "react-router";


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
            ],
            errorElement:<Error />,
       
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={NewRouter} />);

