import { CssBaseline } from "@mui/material";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import FilterNavbar from "../../components/header/filter-navbar";
const drawerWidth = 300;

export default function FilterSidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#F9FAFB",
        minWidth: "calc(100vw - 17px)",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <FilterNavbar width={drawerWidth} />
      {/* <Box
        sx={{
          minWidth: `${drawerWidth}px`,
          display: { xs: "none", md: "block" },
        }}
      /> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          position: "relative",
        }}
      >
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
      {/* <Box
        sx={{
          minWidth: `${drawerWidth}px`,
          display: { xs: "none", md: "block" },
        }}
      /> */}
    </Box>
  );
}
