import React from "react";
import ReactDOM from "react-dom/client";
import { RouterlList } from "./routes/RouterList";
import "../src/assets/css/index.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterlList />
  </React.StrictMode>,
);
