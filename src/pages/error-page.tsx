import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  const navigate = useNavigate();

  return (
    <Box
      id="error-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      minWidth="100vw"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body1" component="i" mb={2}>
        {error.statusText || error.message}
      </Typography>
      <Button variant="outlined" color="success" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </Box>
  );
}
