import React, {lazy, Suspense} from 'react';
import RotatingBackground from "../RotatingBackground";
import Header from "../Header";
import Footer from "../Footer";

//lazy load WeatherAPI
const WeatherAPI = lazy(() => import('../WeatherAPI'));

export default function Home() {
    return (
        <div>
            <RotatingBackground>
                <header>
                    <div className='weatherSection'>
                        <Suspense fallback={<p>Loading weather data...</p>}>
                            <WeatherAPI />
                        </Suspense>
                    </div>
                    <Header />
                </header>
            </RotatingBackground>
            <Footer />
        </div>
    )
}