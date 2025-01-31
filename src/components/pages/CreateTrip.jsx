import {useState} from 'react';
import ActivityForm from '../activities/AcitivityForm';
import Footer from '../Footer';

export default function CreateTrip() {
    const [activities, setActivities] = useState(() => {
        const savedActivities = localStorage.getItem('activities');
        return savedActivities ? JSON.parse(savedActivities) : [];
    });

    const addActivity = (activity) => {
        const updatedActivities = [...activities, activity];
        setActivities(updatedActivities);
        localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
      };

    return (
        <div>
            <h1>Create Trip</h1>
            <ActivityForm addActivity={addActivity} />
            <Footer />
        </div>
    )
};