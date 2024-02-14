import React from "react";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
export default function Events({allEvents}){
   
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

                <h1 className="text-center font-bold text-red-500 text-xl">Your Tickets</h1>
                <div className="event-grid">
                    <div className="bg-red-200 p-2 rounded-md shadow-md overflow-hidden relative">

                            <div>
                                <img alt="Poster Image" src="https://www.ticketsasa.com/components/com_enmasse/upload/Gordons_Save_the_Date_IG_Post_1080x1080_a-01.png1706010580.jpg" />
                            </div>
                            <div className="text-center">
                                <span className="block">Date : 2024-03-14</span>
                                <span className="block font-bold">Gordons FunFair uncoupled</span>
                            </div>
                            <div className="bg-cyan-400 px-4 rounded-full text-white top-0 right-0 mt-2 mr-2 absolute">
                                <span> 10 </span>
                            </div>
                    </div>

                </div>

                {/* Tickets Display component -- Use grid formatting*/}
               
                
                <h1 className="text-center font-bold text-red-500 text-xl">Available Tickets</h1>
                <hr className="mt-4 text-red-500"/>
                    <div className="event-grid">
                        {allEvents.map((event)=>{
                            return(                       
                        <div className="grid-card" key={event.id} >
                        <img src={event.image_url} alt="event poster" className="h-auto grayscale hover:grayscale-0 transition duration-500"/>                        
                            <div className="text-center mt-2" >
                                <span className="block">Date: {event.date} </span>
                                <span className="block font-bold" >{event.name}</span>
                                <span className="block text-sm text-slate-500">Tickets Remaining {event.available_tickets}</span>
                                <button className="btn-2"><Link to={"" + event.id}>VIEW EVENT</Link></button>
                            </div>
                        </div>
                        )
                        })}
        
                </div>
                
                </div>

                
                <hr className="mt-2 " />

            
        </>
    )
    }