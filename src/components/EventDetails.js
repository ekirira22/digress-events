import React, { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import DataFetch from "./DataFetch"


export default function EventDetails({allEvents, setAllEvents, onEdit}){
    // console.log(allEvents)
    const pageId= useParams()

    const[event, setEventDetail]=useState({})

    
    useEffect(()=>{
        const eventDetail= allEvents.filter((event)=> {
            return event.id === pageId.id
        })
        setEventDetail(eventDetail[0])
    }, [])

   
    

//     console.log(allEvents)

//    const event = allEvents.find((event)=> event.id === pageId.id)

   const handleBuyClick = (event)=> {

        if(event.available_tickets > 0){ 
            
            const available_tickets = event.available_tickets - 1
            const updateTickets = {...event.available_tickets, available_tickets}
            
            setEventDetail(updateTickets)
            onEdit(event, pageId.id)
            
        } else {
            return console.log("Ticket Sold Out")
        }

        }
        
        


        // if(ticket > 0){
        //     ticket -= 1
        //     console.log(ticket)
            
        //     onEdit(eventDetail, eventDetail.id)
        // } else {
        //     alert("Ticket Sold Out!")
        // }
        
   


    return (
        <>
            <div className="mx-40 m-auto mt-10">
                <div className="bg-cyan-100 px-4 shadow-md">
                    
                    <div className="flex items-center justify-between">
                        <button className="mt-4 bg-red-500 text-white px-3 pb-1 rounded-full"><span className="text-2xl font-bold">&#171; </span><span className="text-sm font-semibold"></span><Link to={`/events`}>GO BACK</Link></button>
                        <h2 className="text-xl uppercase font-bold">{event.name}</h2>
                        <button onClick={()=> handleBuyClick(event)} className="btn">BUY TICKET</button>
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
                               <span className="font-semibold text-red-400">Duration: </span> {event.duration}
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