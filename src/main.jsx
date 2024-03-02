import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";

import MobileApp from "./MobileApp.jsx";
import { GlobalProvider } from "./Context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <MobileApp />
    </GlobalProvider>
  </React.StrictMode>
);
