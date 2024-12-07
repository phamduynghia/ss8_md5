import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import publicRouters from "./routers/public.routes.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={publicRouters}>
    <App />
  </RouterProvider>
);
