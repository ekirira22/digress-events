import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <div className="m-auto mx-40 mt-4 bg-cyan-100 rounded-md p-2 shadow-md">
                <nav className="flex justify-between">
                
                    <div>
                        <img src="https://www.ticketsasa.com/templates/ticketsasa/assets/img/logo.png" alt="Logo"></img>
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