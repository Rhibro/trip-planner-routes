import ActivityItem from '../activities/ActivityItem';

export default function ActivityList({activities, deleteActivity, editActivity}) {
    return (
        <ul>
            {activities.map((activity, index) => (
                <li key={index}>
                    <ActivityItem 
                        tripName={activity.tripName} 
                        dates={activity.dates} 
                        location={activity.location} 
                        onDelete={() => deleteActivity(index)}
                        onEdit={(updatedActivity) => editActivity(index, updatedActivity)} // Pass edit callback
                    />
                </li>
            ))}
        </ul>
    )
}