import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "./index.css";
import { Home } from './home'
import { Consumo } from './consumo'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/consumo",
    element: <Consumo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)