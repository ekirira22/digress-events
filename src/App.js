import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Events from './components/Events';
import Admin from './components/Admin';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <>
      <NavBar />

      <Events />

      <Admin />

      <EventDetails />
    </>
  );
}

export default App;
