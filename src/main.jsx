import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { Provider } from "./context/Books";
import { NavigationProvider } from "./context/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </NavigationProvider>
);
