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
  
  return (
    <>
      {errors.length > 1 ? <p className="error mx-40 m-auto">{errors}</p> : null}
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route exact path='/events' element={<Events allEvents={allEvents}/>}/> 
      <Route path='/events/:id' element={<EventDetails />}/>
      <Route path='/admin' element={<Admin allEvents={allEvents}/>} />
      
      </Routes>
    </>
  );
}

export default App;
