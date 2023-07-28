import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HouseSearch from "../search/house-search";
import { navItems } from "./nav-items";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  container?: () => HTMLElement;
}

const drawerWidth = 240;
export default function NavDrawer({
  mobileOpen,
  handleDrawerToggle,
  container,
}: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Toolbar />
      <Box sx={{ my: 2, width: "95%", mx: "auto" }}>
        <HouseSearch />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{ textAlign: "center", fontWeight: 700 }}
            >
              <ListItemText
                sx={{ color: pathname === item.path ? "#00A76F" : "black" }}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
