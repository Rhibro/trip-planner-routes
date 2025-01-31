import React from 'react';
import { useParams } from 'react-router';
import { InspoData } from './InspoData'; // Import the InspoData
import Footer from '../../Footer';

export default function TripInspoDetails() {
    const { id } = useParams(); // Get the trip ID from the URL
    const trip = InspoData.find((trip) => trip.id === parseInt(id)); // Find the trip by ID

    if (!trip) {
        return <p>Trip not found!</p>; // Handle case where trip is not found
    }

    return (
        <>
        <div className='tripInspoDetailBody'>
            <h1>{trip.tripTitle}</h1>
            <img className='deetsImg' src={trip.image} alt={trip.tripTitle} />
            <p className='deetsDate'>{trip.tripDates}</p>
            <p className='deetsIdeas'>{trip.ideas}</p>
        </div>
        <Footer />
        </>
    );
}