import { Navigate, RouteObject } from "react-router-dom";
import Baselayout from "../layouts/Baselayout";

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
            // {
            //     path: '/',
            //     element: <Login />
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp />
            // },
        ]
    },
    {
        // path: '/',
        // element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
        // children: [
        //     {
        //         path: '',
        //         element: <Navigate to="home" replace />
        //     },
        //     {
        //         path: 'dashboard',
        //         element: <Dashboard />
        //     },
        //     {
        //         path: 'home',
        //         element: <Home />
        //     },
        //     {
        //         path: 'allproducts',
        //         element: <ProductDisplayAdmin />
        //     },
        //     {
        //         path: 'addproduct',
        //         element: <ProductAdd />
        //     },
        //     {
        //         path: 'settings',
        //         element: <Settings />
        //     },
        //     {
        //         path: 'orders',
        //         element: <OrderList />
        //     },
        //     {
        //         path: 'orderdetails',
        //         element: <OrderDetails />
        //     },
        //     {
        //         path: 'delivery',
        //         element: <DeliveryOrder />
        //     },
        // ]
    },
    {
        // path: '*',
        // element: <NotFound />,

    },
]

export default routes