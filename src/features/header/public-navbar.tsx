import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { m } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { varFade } from "../../components/animate/variants copy";
import { textGradient } from "../theme/css";

export const StyledTextGradient = styled(m.h1)(({ theme }) => ({
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

const PublicNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "transparent",
          backdropFilter: "blur(20px)",
          boxShadow: "none",
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
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default PublicNavbar;
