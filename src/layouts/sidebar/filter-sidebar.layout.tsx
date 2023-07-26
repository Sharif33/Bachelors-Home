import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import FilterNavbar from "../../components/header/filter-navbar";

const drawerWidth = 300;

export default function FilterSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <FilterNavbar width={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Box sx={{ minWidth: `${drawerWidth}px` }} />
    </Box>
  );
}
