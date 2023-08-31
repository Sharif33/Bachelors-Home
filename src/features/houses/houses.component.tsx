import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import HousesPagination from "../../components/pagination/houses-pagination";
import SidebarComponent from "../../layouts/sidebar/sidebar.component";
import { UseFilters } from "../filters/use-filters";

const drawerWidth = 300;
interface Props {
  window?: () => Window;
}

const HousesComponent = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { filteredHouses } = UseFilters();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { md: "none", xs: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "dashed 1px #e0e0e0",
            boxShadow: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
          },
        }}
      >
        <Toolbar />
        <SidebarComponent />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            // left: drawerWidth,
            top: 60,
            // bottom: 60,
            boxSizing: "border-box",
            borderRight: "dashed 1px #e0e0e0",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 10px",
          },
        }}
      >
        {/* <Toolbar /> */}
        <SidebarComponent />
        <Toolbar />
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
        }}
      >
        <Button
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            mr: 2,
            display: { md: "none", xs: "flex" },
            justifyContent: "flex-end",
            position: "fixed",
            top: 60,
            right: 0,
            zIndex: 100,
          }}
        >
          Filter
          <FilterAltOutlinedIcon sx={{ mr: 1 }} />
        </Button>

        <HousesPagination data={filteredHouses} />
      </Box>
    </Box>
  );
};

export default HousesComponent;
