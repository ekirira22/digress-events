// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Events from './components/Events';
import Admin from './components/Admin';
import EventDetails from './components/EventDetails';
import { Route, Routes} from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route exact path='/events' element={<Events />}/> 
      <Route path='/events/:id' element={<EventDetails />}/>
      <Route path='/admin' element={<Admin />} />
      
      </Routes>
    </>
  );
}

export default App;
