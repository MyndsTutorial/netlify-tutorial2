import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import AnimePage from "./pages/AnimePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "animes",
        element: <AnimePage/>
      },
      {
        path: "/",
        element: <HomePage/>
      },
      
    ],
    errorElement: <ErrorPage/>
  },
])