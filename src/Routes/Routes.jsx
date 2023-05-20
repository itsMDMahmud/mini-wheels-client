import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/Shared/ErrorPage";
import AllToy from "../components/AllToy";
import MyToys from "../components/MyToys";
import Add_A_Toy from "../components/Add_A_Toy";
import Blog from "../components/Blog";
import Login from "../login and register/Login";
import Register from "../login and register/Register";
import CarDetails from "../components/CarDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "alltoys",
        element: <AllToy></AllToy>
      },
      {
        path: "alltoys/details/:_id",
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>, 
        loader: ({params}) => fetch(`http://localhost:5000/toylist/${params._id}`)
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/mytoys/update/:_id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/mytoys/${params._id}`)
      },
      {
        path: "/add",
        element: <Add_A_Toy></Add_A_Toy>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ],
  },
]);
export default router;
