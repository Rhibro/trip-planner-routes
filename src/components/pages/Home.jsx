import WeatherAPI from "../WeatherAPI";
import RotatingBackground from "../RotatingBackground";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
    return (
        <div>
            <RotatingBackground>
                <header>
                    <div className='weatherSection'>
                        <WeatherAPI />
                    </div>
                    <Header />
                </header>
            </RotatingBackground>
            <Footer />
        </div>
    )
}