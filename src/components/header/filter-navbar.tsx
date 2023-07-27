import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import AccountMenu from "./account-menu";
const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about_us",
  },
  {
    title: "Contact",
    path: "/contact_us",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Posts",
    path: "/discusion",
  },
];
const FilterNavbar = ({ width }: { width?: number }) => {
  const { pathname } = useLocation();
  return (
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
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          noWrap
          component="div"
          width={width}
          color="#00A76F"
          fontWeight={700}
        >
          Bachelors Home
        </Typography>
        <Box>
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
      </Toolbar>
    </AppBar>
  );
};

export default FilterNavbar;
