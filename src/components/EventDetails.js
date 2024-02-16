import React, { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"


export default function EventDetails({allEvents, onEdit, boughtTickets, setBoughtTickets}){
    // console.log(allEvents)
    //Bug .. // All events is lost when page is refreshed!!
    const myId= useParams()
    const pageId = parseInt(myId.id)
    console.log(pageId, "Events is", allEvents)


    const[event, setEventDetail]=useState({})
    const [soldOut, setSoldOut] = useState(false)

    
    useEffect(()=>{
        const eventDetail= allEvents.filter((event)=> {
            return event.id === pageId
        })
        setEventDetail(eventDetail[0])
        if(event.available_tickets < 1){
            setSoldOut(true)
        }
    }, [pageId])

   

   const handleBuyClick = (event)=> {
        if(event.available_tickets > 0){ 
            
            const new_tickets = event.available_tickets - 1
            const updatedTicket = {...event, available_tickets : new_tickets}
            
            setEventDetail(updatedTicket)
                //Updates Component and DB
            onEdit(updatedTicket, pageId)
                //Updates bought event to component in Buy Tickets and number of tickets
            boughtTicketsFn(updatedTicket)
            alert("Thank you for purchasing with Digress Events")
    } 

    function boughtTicketsFn(updatedTicket){
        //First check if the tickets already exists in bought tickets
        //If it doesn't.. add it with an extra key of bought_tickets = 1
        //If it does. Increment existing bought_tickets
        const ticketExists = boughtTickets.find(ticket => {
            return ticket.id === updatedTicket.id
        })
        if(ticketExists === undefined){
            updatedTicket.bought_tickets = 1
            // console.table(updatedTicket)
            setBoughtTickets([...boughtTickets, updatedTicket])
        }else{
            //If it exists. Map through and increment bought_tickets by 1
            boughtTickets.map(ticket => {
                if(ticket.id === updatedTicket.id){
                    return ticket.bought_tickets += 1
                }
            })
            
            // Map through component again and update

        }
       
    }
 }

    return (
        <>
            <div className="mx-40 m-auto mt-10">
                <div className="bg-cyan-100 px-4 shadow-md">
                    
                    <div className="flex items-center justify-between">
                        <button className="mt-4 bg-red-500 text-white px-3 pb-1 rounded-full"><span className="text-2xl font-bold">&#171; </span><span className="text-sm font-semibold"></span><Link to={`/events`}>GO BACK</Link></button>
                        <h2 className="text-xl uppercase font-bold">{event.name}</h2>
                        <button onClick={()=> handleBuyClick(event)} className="btn" {...soldOut ? "disabled" : ""}>{soldOut ? "SOLD OUT" : "BUY TICKET"}</button>
                    </div>

                    <hr className="mt-4"/>

                  
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-16">
                        <div>
                            <div className="overflow-hidden">
                             <img src={event.image_url} alt="event" className="rounded-sm"></img>
                            </div>
                        </div>
                        <div className="space-y-6 pt-10">
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Duration: </span> {event.duration} Days
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Date: </span> {event.date}
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Time: </span> {event.time}
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Available Tickets: </span> {event.available_tickets}
                            </p>   
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Venue: </span> {event.venue}
                            </p>  
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}