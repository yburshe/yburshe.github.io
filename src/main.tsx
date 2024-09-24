import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Projects from "./routes/projects";
import Header from "./components/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
