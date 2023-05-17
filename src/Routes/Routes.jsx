import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/Shared/ErrorPage";
import AllToy from "../components/AllToy";
import MyToys from "../components/MyToys";
import Add_A_Toy from "../components/Add_A_Toy";
import Blog from "../components/Blog";

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
        path: "/login",
        element: <Homepage></Homepage>
      },
      {
        path: "/register",
        element: <Homepage></Homepage>
      },
      {
        path: "/alltoys",
        element: <AllToy></AllToy>
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>
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
