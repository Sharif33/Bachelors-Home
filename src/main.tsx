import { Box, CssBaseline } from "@mui/material";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import loadingHome from "./assets/lottie/loading-home.json";
import Lottiefiles from "./features/lottie-files/lottie-files";
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
          <Lottiefiles image={loadingHome} height={100} />
        </Box>
      }
    >
      <CssBaseline />
      <App />
    </Suspense>
  </React.StrictMode>
);
