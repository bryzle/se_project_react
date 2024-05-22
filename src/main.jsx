import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx"; // Change the file extension to match the actual file name
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
