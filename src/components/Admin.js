import { useFormik} from "formik";
import { useState } from "react";
import Pagination from "./Pagination";

export default function Admin({allEvents, handleDelete, onAdd, onEdit, postsPerPage, totalPosts, paginate, currentPage}){
        //This state will be used to determine if the form is in add mode or edit mode (True => Add Mode False => Edit mode)
    const [addOrEdit, setAddOrEdit] = useState(true)
    const [editID, setEditID] = useState('')
        //Initialize values to use in Formik Component
    const formik = useFormik({
        enableReinitialize : true,
        initialValues : {
            name :"",
            date : "",
            time:"",
            duration :"",
            image_url:"",
            available_tickets: "",
            tickets_sold: 0,
            venue : ""
        },
        onSubmit : values => {
            if(addOrEdit){
                    //Pass values to callback, reset Form
                onAdd(values)
                formik.resetForm()
            }else{
                    //Pass values to callback, reset Form, set Add Form to true
                onEdit(values,editID)
                formik.resetForm()
                setAddOrEdit(true)
            }
        },
        onReset : () => {
                //Upon reset set form to original state
            setAddOrEdit(true)
        }
   })


    const handleEdit = (eventdetail) => {
            //Set State to Editing Form
            // Set ID of what is being edited
            //Research a better way to modularize this
        setAddOrEdit(false)
        setEditID(eventdetail.id)

        formik.setFieldValue("name", eventdetail.name)
        formik.setFieldValue("date", eventdetail.date)
        formik.setFieldValue("time", eventdetail.time)
        formik.setFieldValue("duration", eventdetail.duration)
        formik.setFieldValue("image_url", eventdetail.image_url)
        formik.setFieldValue("available_tickets", eventdetail.available_tickets)
        formik.setFieldValue("tickets_sold", eventdetail.tickets_sold)
        formik.setFieldValue("venue", eventdetail.venue)
    }
        //Maps through and displays all the events from component passed down from App.js
    const events = allEvents.map(eventdetail => {
        return (
            <div key={eventdetail.id} className="grid-card relative">
                    <img src={eventdetail.image_url} alt="poster" className="event-image"/>
                    <div className="text-center mt-2">
                        <span className="block font-bold">{eventdetail.name}</span>
                        <span className="block text-sm text-slate-500">Tickets Sold: {eventdetail.tickets_sold}</span>
                        <div className="mt-2">
                            <button className="btn-2 top-2 left-4 absolute" onClick={() => handleEdit(eventdetail)}>EDIT</button>
                            <button className="btn-2 top-2 right-4 absolute" onClick={() => handleDelete(eventdetail)}>DELETE</button>
                        </div>
                    </div>
            </div>
        )
    })
    return (
        <>
        <div className="mt-6 mx-40 text-center">
            <h2 className="text-xl font-semibold text-red-500 uppercase">Add / Edit Event </h2>

            <form className="mt-5 my-2" onSubmit={formik.handleSubmit }>
                <input type="text" name="name" className="input-field" placeholder="Event Name" value={formik.values.name} onChange={formik.handleChange} required/>
                    <div className="error"></div>
                <input type="date" name="date" className="input-field" placeholder="Event Date" value={formik.values.date} onChange={formik.handleChange} required/>  
                    <div className="error"></div>
                <input type="text" name="time" className="input-field" placeholder="Enter Time Eg. 8:00AM - 6.00PM" value={formik.values.time} onChange={formik.handleChange} required/>  
                    <div className="error"></div>
                <input type="number" name="duration" className="input-field" placeholder="Duration of Event" value={formik.values.duration} onChange={formik.handleChange} required/> 
                    <div className="error"></div>
                <input type="text" name="image_url" className="input-field" placeholder="Enter Image URL" value={formik.values.image_url} onChange={formik.handleChange} required/>  
                    <div className="error"></div>
                <input type="number" name="available_tickets" className="input-field" placeholder="Enter Tickets Avaliable" value={formik.values.available_tickets} onChange={formik.handleChange} required/>  
                    <div className="error"></div>
                <input type="text" name="venue" className="input-field" placeholder="Enter Venue" value={formik.values.venue} onChange={formik.handleChange} required/>  
                    <div className="error"></div>
                <div className="flex justify-between">
                    <button type="reset" className="btn" onClick={formik.resetForm}>RESET</button>
                    <button type="submit" className="btn">{addOrEdit ? "ADD EVENT" : "EDIT EVENT"}</button>
                </div>
            </form>

            <hr className="mt-4"></hr>
        </div>

        <div className="mx-40 m-auto">
            <div className="event-grid">
                {events}
            </div>
        </div>
        <hr className="mt-4 mx-40"/>
        <div className="p-4 rounded-sm m-2">
                <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} currentPage={currentPage}/>
        </div>
        <hr className="mt-4" id="page"/>
        </>
    )
}