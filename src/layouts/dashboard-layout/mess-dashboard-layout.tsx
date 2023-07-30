import { CssBaseline } from "@mui/material";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Outlet } from "react-router-dom";
import MessNavbar from "../../features/mess-dashboard/mess-navbar";
import MessNavDrawer from "../../features/mess-dashboard/sidebar-drawer";

interface Props {
  window?: () => Window;
}

export default function MessDashboardLayout(props: Props) {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#F9FAFB",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <MessNavbar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box component="nav">
        <MessNavDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          container={container}
          drawerWidth={drawerWidth}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}
