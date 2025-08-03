import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";

export default function App() {

    let routes = createBrowserRouter([
        {
            path: '',
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},

            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}


