import Footer from "../../Footer";
import React from 'react';
import { Link } from 'react-router-dom';
import { InspoData } from './InspoData';

export default function TripInspo() {
    return (
        <div>
            <h1>Trip Inspiration</h1>
            <ul>
                {InspoData.map((trip) => (
                    <li key={trip.id}>
                        <Link to={`/tripinspo/${trip.id}`}>
                            <img className='inspoImg' src={trip.image} alt={trip.tripTitle} />
                            <h2>{trip.tripTitle}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}