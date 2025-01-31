import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/pages/Home';
import CreateTrip from '../components/pages/CreateTrip';
import TripDetails from '../components/pages/TripDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/createtrip',
        element: <CreateTrip />,
    },
    {
        path: '/tripdetails',
        element: <TripDetails />,
    },
]);

export default router;