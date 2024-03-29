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
  const [boughtTickets, setBoughtTickets] = useState([])
  const [stateSearchValue, setStateSearchValue] = useState('')
    //Set Errors
  const [errors, setErrors] = useState('')

  useEffect(() => {
    const response = DataFetch(API, "GET")
    response.then(events => setAllEvents(events))
  },[])

  useEffect(() => {
    //FILTER EVENTS AND SET ALL EVENTS TO RESULTS
      //Filter transactions and pass value to the Transactions component //Filters based on category or description
      const filteredEvents = allEvents.filter((event) => {
        if(event.name.toLowerCase().includes(stateSearchValue) || event.venue.toLowerCase().includes(stateSearchValue)){
          return true
        }
      })
      setAllEvents(filteredEvents)
  },[stateSearchValue])


      //PAGINATION STATES
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(4)
      //WE CALCULATE PAGES BASED ON THE ABOVE
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirsPost = indexOfLastPost - postsPerPage
      //Current Posts that should be displayed now. We'll use this instead of allEvents
    const currentEvents = allEvents.slice(indexOfFirsPost, indexOfLastPost)
      //Set Page Number and How many pages to view
    const paginate = (number) => setCurrentPage(number)

    //CRUD FUNCTIONS

  const handleDelete = async (eventdetail) => {
      //Prompt for confirmation
    if(!window.confirm(`Are you sure you want to delete ${eventdetail.name} event? `)) return
        //Delete From Component
    try{
      const remainingEvents = allEvents.filter(event => {
        return event.id !== eventdetail.id
      })
      setAllEvents(remainingEvents)
        //Delete from Db.json
      await DataFetch(`${API}/${eventdetail.id}`, "DELETE")
    }catch(error){
      console.log("Error Message", error)
    }
  }

  const onAdd = async (eventdetail) => {
    try{
          //Add to current component of events
      setAllEvents([...allEvents, eventdetail])
      //Add to database
      await DataFetch(`${API}`, "POST", eventdetail)
    }catch(error){
      console.log("Error Message", error)
    }
  }

  const onEdit = async (eventdetail, id) => {
    try{
        //Add edited event event to current component
      const sortedEvents = allEvents.map(event => {
        if(id === event.id){
          return eventdetail
        }else{
          return event
        }
      })
      setAllEvents(sortedEvents)
        //Now update DB
      await DataFetch(`${API}/${id}`, "PATCH", eventdetail)
    }catch(error){
      console.log("Error Message", error)
    }
  }
  
  return (
    <>
      {errors.length > 1 ? <p className="error mx-40 m-auto">{errors}</p> : null}
      <NavBar setSearchValue={setStateSearchValue} />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route exact path='/events' element={<Events boughtTickets={boughtTickets} allEvents={currentEvents} postsPerPage={postsPerPage} totalPosts={allEvents.length} paginate={paginate} currentPage={currentPage}/>}/> 
      <Route path='/events/:id' element={<EventDetails allEvents={allEvents} onEdit={onEdit} boughtTickets={boughtTickets} setBoughtTickets={setBoughtTickets} />}/>
      <Route path='/admin' element={<Admin allEvents={currentEvents} handleDelete={handleDelete} onAdd={onAdd} onEdit={onEdit} postsPerPage={postsPerPage} totalPosts={allEvents.length} paginate={paginate} currentPage={currentPage}/>} />
      
      </Routes>
    </>
  );
}

export default App;
