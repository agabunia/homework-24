import { RouteObject } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import FactsPage from "./pages/FactsPage";
import MainPage from "./pages/MainPage";

const router:RouteObject[] = [
    {
        element: <Layouts />,
        path: '/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <AboutPage />,
                path: 'about'
            },
            {
                element: <FactsPage />,
                path: '/facts/:factId'
            }
        ]
    },
    {
        element: <ErrorPage />,
        path: '*'
    }
]

export default router