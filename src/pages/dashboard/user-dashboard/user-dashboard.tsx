import { Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import { varBounce } from "../../../components/animate/variants copy";

const UserDashboard = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "calc(100vh - 10rem)", m: "auto" }}
    >
      <m.div variants={varBounce().in}>
        <Typography
          fontWeight={800}
          fontSize={{ xs: "2rem", md: "4rem" }}
          lineHeight={1.2}
          sx={{
            color: "black",
            display: "inline-block",
          }}
        >
          Welcome to
        </Typography>
      </m.div>
      <m.div variants={varBounce().in}>
        <Typography
          fontWeight={800}
          fontSize={{ xs: "2rem", md: "4rem" }}
          lineHeight={1.2}
          sx={{
            background:
              "-webkit-linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          BACHELORS-HOME
        </Typography>
      </m.div>
    </Stack>
  );
};

export default UserDashboard;
