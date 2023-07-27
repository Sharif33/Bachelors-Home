import { Box } from "@mui/material";
import { NotFoundView } from "../features/error";

export default function ErrorPage() {
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
      <NotFoundView />
    </Box>
  );
}
