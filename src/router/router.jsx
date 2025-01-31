import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/pages/Home';
import CreateTrip from '../components/pages/CreateTrip';
import TripDetails from '../components/pages/TripDetails';
import TripInspo from '../components/pages/tripInspo/TripInspo';
import TripInspoDetails from '../components/pages/tripInspo/TripInspoDetails';
import NotFound from '../components/pages/NotFound';

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
    {
        path: '/tripinspo',
        element: <TripInspo />,
    },
    {
        path: '/tripinspo/:id',
        element: <TripInspoDetails />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;