import React, {useState, useEffect} from 'react';
import imageOne from '../assets/beach-trip.jpg';
import imageThree from '../assets/old-trip.jpg';
import imageFour from '../assets/ski-trip.jpg';

const RotatingBackground  = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        `url(${imageOne})`,
        `url(${imageThree})`,
        `url(${imageFour})`,
    ];
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, [currentIndex, images.length]); // Depend on currentIndex

    return (
        <div className='backgroundContainer'>
            <div
                className='backgroundImg'
                style={{ backgroundImage: images[currentIndex] }}>
            </div>
            {children}
        </div>
      );
    };

    export default RotatingBackground; 