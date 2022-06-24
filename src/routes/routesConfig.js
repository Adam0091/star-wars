import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';
import SearchPage from '@containers/SearchPage/SearchPage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/favorites',
        element: <FavoritesPage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;