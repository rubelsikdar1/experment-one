import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from './../pages/Home/Home';
import About from './../pages/About/About';
import Contact from './../pages/Contact/Contact';

import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Use from "../pages/User/Use";
import UserDetels from "../components/UserDetels/UserDetels";
import Login from "../components/Lognin/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            },

            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"user",
                element:<Use/>,
                loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
            },
            {
                path:"user/:id",
                element:<UserDetels/>,
                loader: ({params})=>{
                   return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
                }
            },
            {
                path: "singin",
                element: <Login/>
            }
            
            
        ]
    },
    {
        path:"*",
        element: <NotFoundPage/>
    }
]);
export default routes;