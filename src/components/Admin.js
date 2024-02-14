import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function Admin(){
    const initialValues = {
        name :"",
        date : "",
        time:"",
        duration :"",
        image_url:"",
        available_tickets: "",
        tickets_sold :0,
        venue : ""
    }

    const handleSubmit = (values) => {
        console.log("onsubmit", values)
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Event Name is required"),
        date: Yup.string()
            .required("Event Date is required"),
        time: Yup.string()
            .required("Event Time is required"),
        duration: Yup.number()
            .required("Event Duration is required"),
        image_url: Yup.string()
            .required("Event Poster is required"),
        available_tickets: Yup.number()
            .required("Available Tickets is required"),
        venue: Yup.string()
            .required("Event Venue is required"),
    })

    return (
        <>
        <div className="mt-6 mx-40 text-center">
            <h2 className="text-xl font-semibold text-red-500 uppercase">Add / Edit Form </h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
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
                            <Field name="time" placeholder="Event Time" className="input-field"/>
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
                
            </Formik>
        </div>
        <div className="mx-40 m-auto">
            <div className="event-grid">
                <div className="grid-card">
                    <img src="https://www.ticketsasa.com/components/com_enmasse/upload/Gordons_Save_the_Date_IG_Post_1080x1080_a-01.png1706010580.jpg"></img>
                    <div className="text-center">
                        <span className="block font-bold">Gordons FunFair uncoupled</span>
                        <div className="flex justify-between mt-2">
                            <button className="btn">EDIT</button>
                            <button className="btn">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mt-2 " />
        </>
    )
}