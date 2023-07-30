import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ marginTop: "100px" }}>Loading..</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
