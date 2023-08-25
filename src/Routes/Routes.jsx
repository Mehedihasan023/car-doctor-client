import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
           {
                path: '/',
                element: <Home></Home>,
           },
           {
              path:'login',
              element:<Login></Login>
           },
           {
              path:'signup',
              element:<SignUp></SignUp>
           },
           {
             path:'checkout/:id',
              element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
               loader: ({params}) => fetch(`https://car-doctor-server-two-kappa.vercel.app/services/${params.id}`)
           },
           {
            path:'bookings',
               element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
           },
           {
            path:'*',
            element:<Error></Error>
           }
        ]
    },
]);

export default router;