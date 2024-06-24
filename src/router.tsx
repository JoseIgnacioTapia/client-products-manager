import { createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router"; // Import the Router type after install it
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProduct from "./views/NewProduct";

export const router: Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/productos/nuevo",
        element: <NewProduct />,
      },
    ],
  },
]);
