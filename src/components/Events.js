import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"
import Pagination from "./Pagination";
export default function Events({allEvents, postsPerPage, totalPosts, paginate, currentPage, boughtTickets}){
        
    const [ticketToggle, setTicketToggle] = useState(false)
    let bought = boughtTickets
    useEffect(() => {
        if(boughtTickets.length > 0){
            setTicketToggle(true)
        }
    },[boughtTickets])
        //SESSION STORAGE FOR TICKETS
    if(boughtTickets.length > 1){
        sessionStorage.setItem('boughtticket', JSON.stringify(boughtTickets))
        bought = JSON.parse(sessionStorage.getItem('boughtticket'))
    }
    return (
        <>
            <div>
                <div className="mx-40 m-auto">
                        {/* component for displaying the bought tickets  */}

                    {ticketToggle ? <h1 className="text-center font-bold text-red-500 text-xl mt-10">Your Tickets</h1> : null}

                    <div className="bought-grid">
                        {bought.map(ticket => {
                            return (
                                <div key={ticket.id} className="bought-card-grid">
                                    <div>
                                        <Link to={`/events/${ticket.id}`}><img alt="Poster" src={ticket.image_url} className="bought-event-image"/></Link>
                                    </div>
                                    <div className="text-center">
                                        <span className="block">Date : {ticket.time}</span>
                                        <span className="block font-bold bottom-2 left-1 p-1 rounded-sm absolute bg-cyan-700 text-white text-sm">{ticket.name}</span>
                                    </div>
                                    <div className="bg-cyan-700 px-4 rounded-sm text-white top-0 right-0 absolute">
                                        <span className="text-sm"> {ticket.bought_tickets} Ticket(s)</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    {/* Tickets Display component -- Use grid formatting*/}
                
                    
                    <h1 className="text-center font-bold text-red-500 text-xl mt-6">Available Tickets</h1>
                    <hr className="mt-4 text-red-500"/>
                        <div className="event-grid">
                            {allEvents.map((event)=>{
                                return(                       
                            <div className="grid-card relative" key={event.id} >
                            <img src={event.image_url} alt="event poster" className="event-image"/>                        
                                <div className="text-center mt-2" >
                                    <span className="block">Date: {event.date} </span>
                                    <span className="block font-bold" >{event.name}</span>
                                    <span className="block text-sm text-slate-500 mb-2">Tickets Remaining: {event.available_tickets}</span>
                                    <button className="btn-2 top-0 left-4 absolute"><Link to={"/events/" + event.id}>VIEW EVENT</Link></button>
                                </div>
                            </div>
                            )
                            })}
            
                    </div>
                    
                </div>

                <hr className="mt-4 mx-40 m-auto"></hr>
                <div className="p-2 rounded-sm m-2">
                    <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage}/>
                </div>
                <hr className="mt-2 mx-40 m-auto" id="page" />
            </div>
            <Outlet />        
        </>
    )
}