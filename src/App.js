import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import React, { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cartpage from "./components/Cartpage";
import Spinner from "./components/Spinner";

const About=lazy(()=>import("./components/About"));
const Contact=lazy(()=>import("./components/Contact"));

const AppLayout=()=>{
    return (
        <div className="App">
        <Provider store={appStore} >
          <UserContext.Provider value={{loggedInUser : "Devi Varun"}}>
          <Header/>
          <Outlet/>
          </UserContext.Provider>
        </Provider>
        </div>
    )
};



const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
             {
                path:"/about",
                element:<Suspense  fallback={<Spinner/>}> <About/> </Suspense>
            },
            {
                path:"/contact",
                element:<Suspense  fallback={<Spinner/>}> <Contact/> </Suspense>
            },
            {
                path:"/cart",
                element:<Cartpage/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
]);


ReactDOM.createRoot(document.getElementById("start")).render(<RouterProvider router={appRouter}/>);
  