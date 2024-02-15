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
            <div key={eventdetail.id} className="grid-card">
                    <img src={eventdetail.image_url} alt="poster"/>
                    <div className="text-center mt-2">
                        <span className="block font-bold">{eventdetail.name}</span>
                        <span className="block text-sm text-slate-500">Tickets Sold: {eventdetail.tickets_sold}</span>
                        <div className="flex justify-between mt-2">
                            <button className="btn-2" onClick={() => handleEdit(eventdetail)}>EDIT</button>
                            <button className="btn-2" onClick={() => handleDelete(eventdetail)}>DELETE</button>
                        </div>
                    </div>
            </div>
        )
    })
    return (
        <>
        <div className="mt-6 mx-40 text-center">
            <h2 className="text-xl font-semibold text-red-500 uppercase">Add / Edit Event </h2>
                {/* Method 1 */}
            {/* <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {() => (
                    <Form className="content-center">
                        <div className="field">
                            <Field name="name" placeholder="Event Name" className="input-field" />
                            <ErrorMessage name="name" component="span" className="text-red-500" />
                        </div>

                        <div className="field">
                            <Field name="date" placeholder="Event Date: Eg. 2024-02-25" className="input-field" />
                            <ErrorMessage name="date" component="span" className="text-red-500" />
                        </div>

                        <div className="field">
                            <Field name="time" placeholder="Event Time Eg. 08:00 AM - 05:00 PM" className="input-field"/>
                            <ErrorMessage name="time" component="span" className="text-red-500" />
                            
                        </div>

                        <div className="field">
                            <Field name="duration" placeholder="Event Duration" className="input-field" />
                            <ErrorMessage name="duration" component="span" className="text-red-500" />
                            
                        </div>

                        <div className="field">
                            <Field name="image_url" placeholder="Event Poster" className="input-field" />
                            <ErrorMessage name="image_url" component="span" className="text-red-500" />
                            
                        </div>

                        <div className="field">
                            <Field name="available_tickets" placeholder="Available Tickets" className="input-field" />
                            <ErrorMessage name="available_tickets" component="span" className="text-red-500" />
                            
                        </div>

                        <div className="field">
                            <Field name="venue" placeholder="Event Venue" className="input-field" />
                            <ErrorMessage name="venue" component="span" className="text-red-500" />
                        </div>
                        <button type="submit" className="btn">SUBMIT</button>
                    </Form>
                )}
                
            </Formik> */}

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