import { m } from "framer-motion";
// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ForbiddenIllustration from "../../assets/illustrations/forbidden-illustration";
import MotionContainer from "../../components/animate/motion-container";
import { varBounce } from "../../components/animate/variants/bounce";

// ----------------------------------------------------------------------

export default function View403() {
  return (
    <MotionContainer>
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          No permission
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: "text.secondary" }}>
          The page you&apos;re trying access has restricted access.
          <br />
          Please refer to your system administrator
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
      </m.div>

      <Button size="large" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}
