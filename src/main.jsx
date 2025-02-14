
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";
import AuthProviders from "./providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);