import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {createBrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";

export default function App() {

    let routes = createBrowserRouter([
        {
            path: '',
            element: <Layout/>,
            children: [

            ]
        }
    ])

    return (
        <>
            <Navbar/>
        </>
    )
}


