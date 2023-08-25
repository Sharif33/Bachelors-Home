import { Box, Container, Grid, Toolbar } from "@mui/material";
import { REQUEST_HOUSES } from "../../faker/fake-house-request";
import { RenderRequestHouses } from "./render-request-houses";
import UserCard from "./user-card";

const RequestHouses = () => {
  return (
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
            <UserCard />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestHouses;
