import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../DigressEvents.png"

export default function NavBar(){
    
    return (
        <>
            <div className="m-auto mx-40 mt-4 bg-cyan-100 rounded-md p-2 shadow-md">
                <nav className="flex justify-between items-center">
                
                    <div>
                        <img src={logo} alt="Logo" height="80px" width="100px"></img>
                    </div>   

                    <div className="px-2 space-x-6 font-semibold text-md mt-3 uppercase leading-normal">
                        <NavLink to="/">Home</NavLink>
                       <NavLink to="/events">Events</NavLink>
                       <NavLink to="/admin">Admin</NavLink>
                       <NavLink to="/about">About</NavLink>
                       
                    </div>
                </nav>
            </div>
        </>
    )
}