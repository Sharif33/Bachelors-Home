import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { HOUSES } from "../../features/faker/fake-post";
import RenderHouses from "../../features/houses/render-houses";
import SidebarComponent from "../../layouts/sidebar/sidebar.component";

const drawerWidth = 300;

const Discusion = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            // boxSizing: "border-box",
            borderRight: "dashed 1px #e0e0e0",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 10px",
          },
        }}
      >
        <Toolbar />
        <SidebarComponent />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {HOUSES.map((house) => (
          <RenderHouses key={house?._id} house={house} />
        ))}
      </Box>
      <Box sx={{ minWidth: `${drawerWidth}px` }} />
    </Box>
  );
};

export default Discusion;
