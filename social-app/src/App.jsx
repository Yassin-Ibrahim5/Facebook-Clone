import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";

export default function App() {

    let routes = createBrowserRouter([
        {
            path: '',
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: 'login', element: <Login/>},
                {path: 'register', element: <Register/>},
                {path: '*', element: <NotFound/>}
            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}


