import { Box, CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
