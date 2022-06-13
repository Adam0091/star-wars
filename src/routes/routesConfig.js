import PeoplePage from "@containers/PeoplePage/";
import HomePage from "@containers/HomePage/";
import NotFoundPage from "@containers/NotFoundPage/";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/people",
    exact: true,
    element: <PeoplePage />,
  },
  {
    path: "*",
    exact: false,
    element: <NotFoundPage />,
  },
];

export default routesConfig;
