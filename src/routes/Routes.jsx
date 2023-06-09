import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import AdminPanel from "../Layout/AdminPanel";
import AdHome from "../pages/Admin/Home/AdHome";
import AdDoctors from "../pages/Admin/AdDoctors/AdDoctors";
import AdServices from "../pages/Admin/AdServices/AdServices";
import AdEditDoctor from "../pages/Admin/AdDoctors/AdEditDoctor";
import AdProblems from "../pages/Admin/AdProblems/AdProblems";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
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
            },
            {
                path: '/admin-access/dashboard',
                element: <AdHome></AdHome>
            },
            {
                path: '/admin-access/doctors',
                element: <AdDoctors></AdDoctors>
            },
            {
                path: '/admin-access/services',
                element: <AdServices></AdServices>
            },
            {
                path: '/admin-access/problems',
                element: <AdProblems></AdProblems>
            },
            {
                path: '/admin-access/doctors/edit/:id',
                element: <AdEditDoctor></AdEditDoctor>
            }
        ]
    }
])
export default router;