import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import AdminPanel from "../Layout/AdminPanel";
import AdHome from "../pages/Admin/Home/AdHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path:'/admin-access',
        element: <AdminPanel></AdminPanel>,
        children: [
            {
                path: '/admin-access',
                element: <AdHome></AdHome>
            }
        ]
    }
])
export default router;