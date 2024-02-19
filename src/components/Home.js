import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="mx-40 m-auto mt-10 text-center item">
            <h1 className="text-2xl text-red-500 font-bold"><i>Welcome to Digress Events</i></h1>
            <p className='mt-8 leading-normal'><i>Exciting Events Await! Seize the Moment and Grab Your Tickets Today! Don't Miss Out on the Experience. Act Fast While Tickets Are Still Available. Join Us for Unforgettable Moments and Create Memories That Last a Lifetime.</i></p>
            <video controls autoPlay className='w-full h-80 mt-8'>
                <source src="https://youtu.be/YdvL6irqpuc" />
            </video>
            <button className='border border-black mt-10 p-2 hover:bg-yellow-400 hover:border-yellow-400 hover:text-white transition duration-500'>
                <Link to="/events">BOOK AN EVENT</Link> 
            </button>
            </div>
    );
}

