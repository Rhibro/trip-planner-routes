import { useState } from "react";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; 

export default function ActivityForm({ addActivity }) {
    const [text, setText] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [location, setLocation] = useState('');

    function handleInputOnChange(event) {
        const { name, value } = event.target;
        if (name === 'activity') setText(value);
        else if (name === 'location') setLocation(value);
    }

    function handleBtnClick(event) {
        event.preventDefault();
        if (text && startDate && location) { //checks if fields are not empty
        addActivity({tripName: text, dates: startDate, location});
        setText('');
        setStartDate(null);
        setLocation('');
        }
    }

    return(
        <>
            <form onSubmit={handleBtnClick}>
                <h2>Enter Trip Info</h2>
                <label>name:</label>
                    <input  
                        type="text"
                        name="activity"
                        placeholder="What will you do?"
                        value={text}
                        onChange={handleInputOnChange}>
                    </input>
                <label>date:</label>
                    <DatePicker  
                        selected={startDate}
                        onChange={(date) => setStartDate(date)} // Update state on date change
                        placeholderText="Select a date"
                        dateFormat="yyyy/MM/dd" // Format the date
                    />
                <label>location:</label>
                    <input  
                        type="text"
                        name="location"
                        placeholder="Where will you go?"
                        value={location}
                        onChange={handleInputOnChange}>
                    </input>
                <button type="submit" disabled={!text || !startDate || !location} >submit!</button>
            </form>
        </>
    )
}

// onClick={handleBtnClick}