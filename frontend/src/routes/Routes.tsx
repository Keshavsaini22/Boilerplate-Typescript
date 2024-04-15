import { Navigate, RouteObject } from "react-router-dom";
import Baselayout from "../layouts/Baselayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SidebarLayout from "../layouts/SideLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/DashBoard";
import QuizQuestionAdd from "../pages/QuizQuestionAdd";
import TestPage from "../pages/TestPage";
import NotFound from "../pages/NotFound";

interface ProtectedProps {
    children: React.ReactNode
}
const PrivateRoute = (props: ProtectedProps) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/" /> : <>{props.children}</>;
};

const routes: RouteObject[] = [
    {
        path: '',
        element: <Baselayout />,
        children: [
            {
                path: '',
                element: <Navigate to="login" replace />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/',
        element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <Navigate to="home" replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'addquiz',
                element: <QuizQuestionAdd />
            },
            {
                path: 'quiz',
                element: <TestPage />
            },
            {
                path: '*',
                element: <NotFound />,

            },

        ]
    },
    {
        path: '*',
        element: <NotFound />,

    },
]

export default routes