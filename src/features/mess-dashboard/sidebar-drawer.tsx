import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { messNavItems } from "./mess-nav-items";

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  container?: () => HTMLElement;
  drawerWidth?: number;
}

export default function MessNavDrawer({
  mobileOpen,
  handleDrawerToggle,
  container,
  drawerWidth = 240,
}: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {messNavItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{ fontWeight: 700 }}
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
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
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
    </>
  );
}
