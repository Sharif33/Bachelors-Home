import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
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
            <Grid item xs={12} md={8} mt={2}>
              {REQUEST_HOUSES.map((house) => (
                <RenderRequestHouses house={house} key={house._id} />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                p={3}
                sx={{
                  blur: 20,
                  opacity: 0.9,
                  backgroundImage:
                    "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundPosition: "top right, left bottom",
                  backgroundSize: "50%, 50%",
                  p: 2,
                  borderRadius: 2,
                  mt: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  About
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Sharif Rashed
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  @Mirpur, Dhaka
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{ width: 1, mt: 2 }}
                >
                  Create a request
                </Button>
              </Box>
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
