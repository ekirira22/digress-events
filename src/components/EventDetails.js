import React from "react"
import {useParams, Link} from "react-router-dom"


export default function EventDetails({clickedEvent}){
    const pageId= useParams()
    console.log(pageId)


    return (
        <>
            <div className="mx-40 m-auto mt-10">
                <div className="bg-cyan-100 px-4 shadow-md">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <button className="mt-4 bg-red-500 text-white px-3 pb-1 rounded-full"><span className="text-2xl font-bold">&#171; </span><span className="text-sm font-semibold"></span><Link to={`/events`}>GO BACK</Link></button>
                        <h2 className="text-xl uppercase font-bold">Elegance in Love</h2>
                        <button className="btn">BUY TICKET</button>
                    </div>

                    <hr className="mt-4"/>

                    {/* Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-16">
                        <div>
                            <div className="overflow-hidden">
                             <img src="https://www.ticketsasa.com/components/com_enmasse/upload/davido__king_promise_1080_by_1080-4.jpg1707721788.jpg" className="rounded-sm"></img>
                            </div>
                        </div>
                        <div className="space-y-6 pt-10">
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Duration: </span> 3 Days
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Date: </span> 2024-02-15
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Time: </span> 06:00 PM - 11:00 PM
                            </p>
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Available Tickets: </span> 79
                            </p>   
                            <p className="text-lg">
                               <span className="font-semibold text-red-400">Venue: </span> Sarit Center
                            </p>  
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}