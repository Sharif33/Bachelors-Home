import { CssBaseline } from "@mui/material";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import Footer from "../../features/footer/footer";
import FilterNavbar from "../../features/header/filter-navbar";
const drawerWidth = 300;

export default function HomeLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F9FAFB",
        minWidth: "calc(100vw - 17px)",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <FilterNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: "relative",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
