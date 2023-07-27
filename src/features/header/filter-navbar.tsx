import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import HouseSearch from "../search/house-search";
import AccountMenu from "./account-menu";
const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Houses",
    path: "/discusion",
  },
  {
    title: "FAQ",
    path: "/faq",
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
            <Box component={Link} to="/" width={1}>
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
            </Box>
            <HouseSearch />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
            <AccountMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default FilterNavbar;
