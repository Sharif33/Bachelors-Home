import CrossIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { m } from "framer-motion";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { varFade, varHover } from "../../components/animate/variants copy";
import AccountMenu from "../header/account-menu";
import { navItems } from "../header/nav-items";
import { textGradient } from "../theme/css";

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  fontWeight: 800,
  margin: 0,
  textAlign: "center",
  backgroundSize: "400%",
  fontSize: "1.5rem",
  fontFamily: "'Barlow', sans-serif",
  [theme.breakpoints.up("md")]: {
    fontSize: `2rem`,
  },
}));

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const MessNavbar = ({ mobileOpen, handleDrawerToggle }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const today = new Date();
  const date = today.getDate();
  const day = today.toLocaleString("default", { weekday: "long" });
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();

  const renderToday = date + " " + month + " " + year;

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "transparent",
          backdropFilter: "blur(20px)",
          borderBottom: "dashed 1px #e0e0e0",
          boxShadow: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
        }}
      >
        <Box sx={{ mx: { md: 15, xs: 2.5 } }}>
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
                gap: 2,
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
                sx={{ display: { md: "none" } }}
              >
                {mobileOpen ? <CrossIcon /> : <MenuIcon />}
              </IconButton>
              <Box component={Link} to="/" width={1}>
                <m.div variants={varFade().in}>
                  <StyledTextGradient
                    animate={{ backgroundPosition: "200% center" }}
                    transition={{
                      repeatType: "reverse",
                      ease: "linear",
                      duration: 20,
                      repeat: Infinity,
                    }}
                  >
                    BACHELORS
                  </StyledTextGradient>
                </m.div>
              </Box>
              <Box
                onClick={() => navigate("/")}
                component="img"
                src={logo}
                height={40}
                width={60}
                alt="logo"
                sx={{ cursor: "pointer", display: "none" }}
              />
            </Box>
            <Box
              sx={{
                width: "fit-content",
                textAlign: "center",
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {day}, {time}
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {renderToday}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: pathname === item.path ? "#00A76F" : "black",
                      px: 2,
                      fontWeight: "bolder",
                      fontSize: "1rem",
                      textTransform: "none",
                      "&:hover": {
                        color: "#00A76F",
                        fontWeight: "bolder",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
              <AccountMenu />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default MessNavbar;
