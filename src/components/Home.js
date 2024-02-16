import React, { useEffect, useState } from 'react';
import '../styles.css'; 

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
            <h1 className="title">Welcome to ticketsasa</h1>
            <p>Exciting Events Await! Seize the Moment and Grab Your Tickets Today! Don't Miss Out on the Experience. Act Fast While Tickets Are Still Available. Join Us for Unforgettable Moments and Create Memories That Last a Lifetime.</p>
        </div>
    );
}

