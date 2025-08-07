import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

function Layout() {
    const location = useLocation();

    const hideNavbarOn = ['/login', '/register', 'not-found'];
    const showNavbar = !hideNavbarOn.includes(location.pathname);

    return (
        <div className={`bg-[#F2F2F2] min-h-screen`}>
            {/*{ showNavbar && <Navbar/>}*/}
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;