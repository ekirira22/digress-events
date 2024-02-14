import React from "react";
import { Link } from "react-router-dom"

export default function Events(){


    return (
        <>
            <div className="mx-40 m-auto">
                {/* Search bar component    */}
                <div className="text-center mt-4">
                    <form>
                        <input type="text" placeholder="Search for Event" className="px-2 w-1/2 h-10 outline-cyan-200" />
                        <button className="btn">Submit</button>
                    </form>
                </div>

                <hr className="mt-2 " />
                {/* component for displaying the bought tickets  */}

                <h1 className="text-center font-bold text-red-500 text-xl">Bought Tickets</h1>
                <div className="event-grid">
                    <div className="bg-red-200 p-2 rounded-md shadow-md overflow-hidden relative">

                            <div>
                            <img src="https://www.ticketsasa.com/components/com_enmasse/upload/Gordons_Save_the_Date_IG_Post_1080x1080_a-01.png1706010580.jpg" />
                            </div>
                            <div className="text-center">
                                <span className="block">Date : 2024-03-14</span>
                                <span className="block font-bold">Gordons FunFair uncoupled</span>
                            </div>
                            <div className="bg-cyan-400 absolute px-4 rounded-full text-white ml-0 mt-0">
                                <span> 0 </span>
                            </div>
                    </div>

                </div>

                {/* Tickets Display component -- Use grid formatting*/}

                <h1 className="text-center font-bold text-red-500 text-xl">Available Tickets</h1>
                <div className="event-grid">

                    
                        <div className="grid-card">
                        <img src="https://www.ticketsasa.com/components/com_enmasse/upload/Gordons_Save_the_Date_IG_Post_1080x1080_a-01.png1706010580.jpg"></img>
                        <div className="text-center">
                            <span className="block">Date : 2024-03-14</span>
                            <span className="block font-bold">Gordons FunFair uncoupled</span>
                            
                        </div>
                    </div>
                    

                    
                </div>
                
                <hr className="mt-2 " />

                
            </div>
        </>
    )
}