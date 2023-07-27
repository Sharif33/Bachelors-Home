import { m } from "framer-motion";
// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useRouteError } from "react-router-dom";
import PageNotFoundIllustration from "../../assets/illustrations/page-not-found-illustration";
import MotionContainer from "../../components/animate/motion-container";
import { varBounce } from "../../components/animate/variants/bounce";

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          Sorry, Page {error.statusText || error.message}!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <PageNotFoundIllustration
          sx={{
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />
      </m.div>
      <m.div variants={varBounce().in}>
        <Button onClick={() => navigate("/")} size="large" variant="contained">
          Go to Home
        </Button>
      </m.div>
    </MotionContainer>
  );
}
