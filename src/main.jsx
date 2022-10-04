// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from './App'
import ErrorPage from "./error-page";
import AuthenticationNumber from "./components/AuthenticationNumber";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

const router = createBrowserRouter([
  // set the root layout path as App
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/authentication",
        element: <AuthenticationNumber />
      },
      {
        path: "/welcome",
        element: <Welcome />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
