import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FilterNavbar from "../../components/header/filter-navbar";
import { HOUSES } from "../../features/faker/fake-post";
import SidebarComponent from "./sidebar.component";

const drawerWidth = 300;

export default function FilterSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <FilterNavbar width={drawerWidth} />
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {HOUSES.map((house) => (
          <Card key={house?._id} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h6">{house.houseType}</Typography>
                <Typography variant="subtitle1">
                  {house.location.address}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">{house.houseRent}</Typography>
                <Typography variant="subtitle1">per month</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
      <Box sx={{ minWidth: `${drawerWidth}px` }} />
    </Box>
  );
}
