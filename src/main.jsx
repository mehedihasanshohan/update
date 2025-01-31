/* eslint-disable no-undef */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);