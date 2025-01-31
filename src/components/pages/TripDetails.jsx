import ActivityList from '../activities/ActivityList';
import Footer from '../Footer';
import { useState } from 'react';

export default function TripDetails() {
    const [activities, setActivities] = useState(() => {
        // loads activities from local storage 
        const savedActivities = localStorage.getItem('activities');
        return savedActivities ? JSON.parse(savedActivities).map(activity => ({
          ...activity,
          dates: new Date(activity.dates) // Convert string back to Date object
        })) : [];
      });
    
    
      const deleteActivity = (index) => {
        const updatedActivities = activities.filter((_, i) => i !== index);
        setActivities(updatedActivities);
        localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
      };
    
      const editActivity = (index, updatedActivity) => {
        const updatedActivities = activities.map((activity, i) =>
          i === index ? { ...updatedActivity, dates: new Date(updatedActivity.dates) } : activity
        );
        setActivities(updatedActivities);
        localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Save to local storage
      };

    return (
        <div>
            <h1>Trip Details</h1>
            <ActivityList activities={activities} deleteActivity={deleteActivity} editActivity={editActivity} />
            <Footer />
        </div>
    )
};