import CrossIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { m } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { varHover } from "../../components/animate/variants copy";
import HouseSearch from "../search/house-search";
import AccountMenu from "./account-menu";
import NavDrawer from "./nav-drawer";
import { navItems } from "./nav-items";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const FilterNavbar = (props: Props) => {
  const { pathname } = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "transparent",
          backdropFilter: "blur(20px)",
          borderBottom: "dashed 1px #e0e0e0",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 10px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                component={m.button}
                variants={varHover(1.05)}
                whileHover="hover"
                whileTap="tap"
                color={mobileOpen ? "error" : "primary"}
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                {mobileOpen ? <CrossIcon /> : <MenuIcon />}
              </IconButton>
              <Box component={Link} to="/" width={1}>
                <Typography
                  variant="h5"
                  fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                  noWrap
                  component="div"
                  color="#00A76F"
                  fontWeight={700}
                >
                  Bachelors Home
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <HouseSearch />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item) => (
                  <Box
                    component={Link}
                    key={item.title}
                    to={item.path}
                    sx={{
                      color: pathname === item.path ? "#00A76F" : "black",
                      px: 2,
                      fontWeight: "bolder",
                      "&:hover": {
                        color: "#00A76F",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {item.title}
                  </Box>
                ))}
              </Box>
              <AccountMenu />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <NavDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          container={container}
        />
      </Box>
    </>
  );
};

export default FilterNavbar;
