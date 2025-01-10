import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Error from './components/Error';
import { createBrowserRouter , RouterProvider  ,Outlet } from 'react-router-dom';
import Body from './components/Body';
import ResturantMenu from './components/ResturantMenu';


const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element : <Body/>,
                 errorElement:<Error/>
            },
            {
                path:"/about",
                element : <About/>,
                errorElement:<Error/>
            },
            {
                path:"/contact",
                element : <Contact/>
            },
            {
                path:"/resturant/:resId",
                element : <ResturantMenu/>,
                errorElement:<Error/>
            },
          
        ],
        errorElement:<Error/>
    }
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)