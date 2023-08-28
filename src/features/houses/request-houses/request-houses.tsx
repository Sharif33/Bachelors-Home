import { Box, Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { REQUEST_HOUSES } from "../../faker/fake-house-request";
import Footer from "../../footer/footer";
import FilterNavbar from "../../header/filter-navbar";
import { RenderRequestHouses } from "./render-request-houses";

const RequestHouses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#F9FAFB",
        minWidth: "calc(100vw - 17px)",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <FilterNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          position: "relative",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Toolbar />
              {REQUEST_HOUSES.map((house) => (
                <RenderRequestHouses house={house} key={house._id} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ position: "sticky", top: 0, right: 0 }}>
                <Toolbar />
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default RequestHouses;
