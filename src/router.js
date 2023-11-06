import {createBrowserRouter} from "react-router-dom";
import Layout from "./pages/Layout";
import AnimePage from "./pages/AnimePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Favorito from "./pages/Favorito";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "animes",
        element: <AnimePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "favorito",
        element: <Favorito />,
        loader: async () => {
          return fetch(`https://api.jikan.moe/v4/anime?q=one-piece`);
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
