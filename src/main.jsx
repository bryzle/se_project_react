import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx"; // Change the file extension to match the actual file name
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
