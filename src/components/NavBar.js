import React from "react"
import { Link, NavLink } from "react-router-dom";
import logo from "../DigressEvents.png"

export default function NavBar({setSearchValue}){
    
    return (
        <>
            <div className="m-auto mx-10  bg-transparent rounded-md px-10 shadow-md">
                <nav className="grid grid-cols-3 items-center grid-flow-row-dense text-center">
                
                    <div>
                       <Link to ="/"><img src={logo} alt="Logo" height="80px" width="100px"></img></Link>
                    </div>   

                    {/* Search bar component    */}
                    <div className="text-center">
                        <form>
                            <input type="text" placeholder="Search for Event or Venue" className="px-2 h-10 w-full outline-cyan-200" onChange={(e) => setSearchValue(e.target.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())} />
                        </form>
                    </div>

                    <div className="px-2 space-x-6 font-semibold text-md uppercase leading-normal">
                       <NavLink to="/" className="hover:text-red-500 transition duration-200">Home</NavLink>
                       <NavLink to="/events" className="hover:text-red-500 transition duration-200">Events</NavLink>
                       <NavLink to="/admin" className="hover:text-red-500 transition duration-200">Admin</NavLink>
                       <NavLink to="/about" className="hover:text-red-500 transition duration-200">About</NavLink>
                       
                    </div>
                </nav>
            </div>
        </>
    )
}