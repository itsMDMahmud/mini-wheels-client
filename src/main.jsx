import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
// #c0392b main colour
// #1a2836 dark blue
// const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       // Perform the search action here
//       performSearch();
//     }
//   };