import { useState } from "react";
import DatePicker from "react-datepicker";

export default function ActivityItem({tripName, dates, location, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTripName, setUpdatedTripName] = useState(tripName);
    const [updatedDates, setUpdatedDates] = useState(dates);
    const [updatedLocation, setUpdatedLocation] = useState(location);

    // const formattedDate = dates instanceof Date ? dates.toLocaleDateString() : 'No date selected';

    const handleSave = () => {
        onEdit({ tripName: updatedTripName, dates: updatedDates, location: updatedLocation });
        setIsEditing(false); // Exit editing mode
      };

      if (isEditing) {
        return (
          <div>
            <input 
              type="text" 
              value={updatedTripName} 
              onChange={(e) => setUpdatedTripName(e.target.value)} 
            />
            <DatePicker 
              selected={updatedDates} 
              onChange={(date) => setUpdatedDates(date)} 
              dateFormat="yyyy/MM/dd" 
            />
            <input 
              type="text" 
              value={updatedLocation} 
              onChange={(e) => setUpdatedLocation(e.target.value)} 
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        );
      }

    return(
        <>
            <h3>{tripName}</h3>
            <h4>dates:</h4>
            <p>{dates instanceof Date ? dates.toLocaleDateString() : 'No date selected'}</p>
            <h4>location:</h4>
            <p>{location}</p>
            <button className="deleteBtn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="deleteBtn" onClick={onDelete} >Delete</button>
        </>
    )
}