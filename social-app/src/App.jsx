import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import UserPosts from "./Components/UserPosts/UserPosts.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";
import ProtectedAuth from "./Components/ProtectedAuth/ProtectedAuth.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";

export default function App() {

    let routes = createBrowserRouter([
        {
            path: '',
            element: <Layout/>,
            children: [
                {index: true, element:<ProtectedRoutes><Home/></ProtectedRoutes>},
                {path: 'posts', element: <ProtectedRoutes><UserPosts/></ProtectedRoutes>},
                {path: 'postDetails/:id', element: <ProtectedRoutes><PostDetails/></ProtectedRoutes>},
                {path: 'login', element: <ProtectedAuth><Login/></ProtectedAuth>},
                {path: 'register', element: <ProtectedAuth><Register/></ProtectedAuth>},
                {path: '*', element: <NotFound/>}
            ]
        }
    ])

    return (
        <RouterProvider router={routes}/>
    )
}


