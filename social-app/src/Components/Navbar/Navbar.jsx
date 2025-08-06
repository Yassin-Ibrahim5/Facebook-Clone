import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="navbar shadow-lg bg-base-100 mx-auto">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-blue-800 font-bold text-2xl hover:bg-white hover:border-transparent hover:shadow-none">Linked Posts</Link>
                </div>
                <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/login"}>Login</NavLink></li>
                            <li><NavLink to="/register">Sign Up</NavLink></li>
                            <li><NavLink to="/posts">Posts</NavLink></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
