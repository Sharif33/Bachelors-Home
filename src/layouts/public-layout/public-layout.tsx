import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import PublicNavbar from "../../features/header/public-navbar";

const PublicLayout = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#F9FAFB",
          minWidth: "100vw",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, md: 0 },
          position: "relative",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(https://minimals.cc/assets/background/overlay_3.jpg) 100% 100% / cover no-repeat",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <PublicNavbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PublicLayout;
