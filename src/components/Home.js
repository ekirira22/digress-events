import React, { useEffect, useState } from 'react';
import '../styles.css'; 
import videoSource from '../ticketsasa.mp4';

export default function Home() {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        if (showAlert) {
            alert('Welcome to ticketsasa.com!');
            setShowAlert(false); 
        }
    }, [showAlert]); 

    return (
        <div className="container">
            <h1 className="title"><i>Welcome to ticketsasa</i></h1>
            <p><i>Exciting Events Await! Seize the Moment and Grab Your Tickets Today! Don't Miss Out on the Experience. Act Fast While Tickets Are Still Available. Join Us for Unforgettable Moments and Create Memories That Last a Lifetime.</i></p>
            <video controls autoPlay style={{ width: '900px', height: '300px' }}>
                <source src={videoSource} type="video/mp4" />
            </video>
            </div>
    );
}

