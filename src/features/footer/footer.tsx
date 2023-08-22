import { Box, Grid, Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { varFade } from "../../components/animate/variants copy";
import routesConfig from "../../routes/routes.config";
import { StyledTextGradient } from "../header/filter-navbar";

const LINKS = [
  {
    headline: "Bachelors Home",
    children: [
      { name: "About us", href: routesConfig.ABOUTUS },
      { name: "Contact us", href: routesConfig.CONTACTUS },
      { name: "FAQs", href: routesConfig.FAQs },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [{ name: "support@bachelors-home.com", href: "#" }],
  },
];

const Footer = () => {
  const date = new Date().getFullYear();
  const logoRender = () => {
    return (
      <Box component={RouterLink} to="/">
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
    );
  };

  return (
    <Box
      component="footer"
      sx={{
        minHeight: "20vh",
        // width: "100vw",
        position: "relative",
        bgcolor: "background.default",
        borderTop: "dashed 1px #e0e0e0",
        py: 2,
        px: { md: 15, xs: 2.5 },
      }}
    >
      <Box py={5}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={5}>
            <Stack direction="column" spacing={2} alignItems="flex-start">
              {logoRender()}
              <Typography variant="body2" width={{ md: "60%", xs: 1 }}>
                Bachelors-Home is a platform for Bangladeshi bachelors to find
                their ideal home away from home. And for mess owners to find
                their ideal tenants.
                {/*  We are here to help you find the perfect place for the bachelor
                to live all over Bangladesh and give you the best mess
                experience. */}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: "column", md: "row" }} pt={2}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-start" }}
                  sx={{ width: 1 }}
                >
                  <Typography
                    component="div"
                    variant="overline"
                    fontWeight={700}
                  >
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Box
                      key={link.name}
                      component={RouterLink}
                      to={link.href}
                      fontSize="0.875rem"
                      sx={{
                        cursor: "pointer",
                        color: "inherit",
                        textDecoration: "none",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.name}
                    </Box>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="caption" color="text.secondary" pt={2}>
        &copy; {date} Bachelors-Home. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
