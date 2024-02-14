// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Events from './components/Events';
import Admin from './components/Admin';
import EventDetails from './components/EventDetails';
import { Route, Routes} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import DataFetch from "./components/DataFetch"

function App() {

  const API = "http://localhost:4000/events"

  //Set the state 
  const [allEvents, setAllEvents] = useState([])
    //Set Errors
  const [errors, setErrors] = useState('')
  useEffect(() => {
    const response = DataFetch(API, "GET")
    response.then(events => setAllEvents(events))
  },[])


    //CRUD FUNCTIONS

  const handleDelete = async (eventdetail) => {
      //Prompt for confirmation
      if(!window.confirm(`Are you sure you want to delete ${eventdetail.name} event? `)) return
          //Delete From Component
    const remainingEvents = allEvents.filter(event => {
      return event.id !== eventdetail.id
    })
    setAllEvents(remainingEvents)
      //Delete from Db.json
    const response = await DataFetch(`${API}/${eventdetail.id}`, "DELETE")

    if(typeof(response !== 'object')){
      setErrors(response)
      return
    }
  }

  const onAdd = async (eventdetail) => {
      //Add to current component of events
    setAllEvents([...allEvents, eventdetail])
      //Add to database
    const response = await DataFetch(`${API}`, "POST")

    if(typeof(response !== 'object')){
      setErrors(response)
      return
    }
    
  }

  const onEdit = async (eventdetail,id) => {
      //Add edited event event to current component
    const sortedEvents = allEvents.map(event => {
      if(id === event.id){
        return eventdetail
      }else{
        return event
      }
    })
    // console.log(sortedEvents)
    setAllEvents(sortedEvents)

      //Now update DB
    
    const response = await DataFetch(`${API}/${id}`, "PATCH", eventdetail)

    if(typeof(response !== 'object')){
      setErrors(response)
      return
    }
    
  }
  
  return (
    <>
      {errors.length > 1 ? <p className="error mx-40 m-auto">{errors}</p> : null}
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route exact path='/events' element={<Events allEvents={allEvents}/>}/> 
      <Route path='/events/:id' element={<EventDetails />}/>
      <Route path='/admin' element={<Admin allEvents={allEvents} handleDelete={handleDelete} onAdd={onAdd} onEdit={onEdit}/>} />
      
      </Routes>
    </>
  );
}

export default App;
