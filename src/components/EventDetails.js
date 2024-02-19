import { useState } from "react"
import {useParams, Link, useNavigate} from "react-router-dom"


export default function EventDetails({allEvents, onEdit, boughtTickets, setBoughtTickets}){
    const navigate = useNavigate()
    const myId= useParams()
    const pageId = parseInt(myId.id)

        //Store data when first loaded in SessionStorage
    if(allEvents.length > 1){
        const eventDetail= allEvents.filter((storedEvent)=> {
            return storedEvent.id === pageId
        })
        sessionStorage.setItem('eventdetail', JSON.stringify(eventDetail))
    }
        //To retrieve, store in a variable
   const storedEvent = JSON.parse(sessionStorage.getItem('eventdetail')) //.json()
   
   const handleBuyClick = (storedEvent, num) => {
        navigate("/events")
        if(storedEvent.available_tickets > 0){ 
            //Check if number of tickets being ordered is less than available
            if(num > storedEvent.available_tickets){
                alert(`Only ${storedEvent.available_tickets} ticket(s) remaining`)
                return
            }

            alert("Thank you for purchasing with Digress Events")
            const new_tickets = storedEvent.available_tickets - num
            const updatedTicket = {...storedEvent, available_tickets : new_tickets, tickets_sold : storedEvent.tickets_sold += num}
            
            // setEventDetail(updatedTicket)
                //Updates Component and DB
            onEdit(updatedTicket, pageId)
                //Updates bought storedEvent to component in Buy Tickets and number of tickets
            boughtTicketsFn(updatedTicket, num)
        }else{
           const updatedTicket = {...storedEvent, available_tickets : "Sold Out"}
           onEdit(updatedTicket, pageId)
        } 
    }

    function boughtTicketsFn(updatedTicket,num){
        //First check if the tickets already exists in bought tickets
        //If it doesn't.. add it with an extra key of bought_tickets = 1
        //If it does. Increment existing bought_tickets
        const ticketExists = boughtTickets.find(ticket => {
            return ticket.id === updatedTicket.id
        })
        if(ticketExists === undefined){
            updatedTicket.bought_tickets = num
            // console.table(updatedTicket)
            setBoughtTickets([...boughtTickets, updatedTicket])
        }else{
            //If it exists. Map through and increment bought_tickets by 1
            boughtTickets.map(ticket => {
                if(ticket.id === updatedTicket.id){
                    return ticket.bought_tickets += num
                }
            })
        }
    }

    const attendEvent = () => {
        //Access the bought tickets and remove the one with the seleceted params ID
        alert("Thank you for attending!!")
        const newTickets = boughtTickets.filter(tikiti => {
            return tikiti.id !== pageId
        })
            //Update component
        setBoughtTickets(newTickets)
            //Removes Bought Tickets from Database
        delete storedEvent[0].bought_tickets
        onEdit(storedEvent[0], pageId)

        navigate("/events")
    }
    return (
        <>
            <div className="mx-40 m-auto mt-10">
                <div className="bg-cyan-100 px-4 shadow-md">
                    
                    <div className="flex items-center justify-between">
                        <button className="mt-4 bg-red-500 text-white px-3 pb-1 rounded-full"><span className="text-2xl font-bold">&#171; </span><span className="text-sm font-semibold"></span><Link to={`/events`}>GO BACK</Link></button>
                        <h2 className="text-xl uppercase font-bold">{storedEvent[0].name}</h2>
                        <form className="space-x-4" onSubmit={(e) => {e.preventDefault(); handleBuyClick(storedEvent[0], parseInt(e.target.number.value))}}>
                            <input type="number" id="number" min="1" max="50" className="input-field" defaultValue={10}/>  
                            <button type="submit" className={storedEvent[0].available_tickets < 1 ? "btn disabled:opacity-50" : "btn"}>{storedEvent[0].available_tickets < 1 ? "SOLD OUT" : "BUY TICKET"}</button>
                        </form>
                    </div>

                    <hr className="mt-4"/>

                  
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-16">
                        <div>
                            <div className="overflow-hidden">
                             <img src={storedEvent[0].image_url} alt="storedEvent" className="rounded-sm"></img>
                            </div>
                        </div>
                        <div className="space-y-6 pt-10 relative">
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Duration: </span> {storedEvent[0].duration} Days
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Date: </span> {storedEvent[0].date}
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Time: </span> {storedEvent[0].time}
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Available Tickets: </span> {storedEvent[0].available_tickets}
                            </p>   
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Venue: </span> {storedEvent[0].venue}
                            </p>  
                            <div className="text-right bottom-2 right-2 absolute">
                                {storedEvent[0].bought_tickets > 0 ? <button type="submit" className="btn-2" onClick={attendEvent}>ATTEND</button> : null}
                            </div>
                        </div>
      
                    </div>

                </div>
            </div>
        </>
    )
}