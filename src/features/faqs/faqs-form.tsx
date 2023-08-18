import { m } from "framer-motion";
import MotionViewport from "../../components/animate/motion-viewport";
// @mui
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { varFade } from "../../components/animate/variants copy";

// ----------------------------------------------------------------------

export default function FaqsForm() {
  return (
    <Box
      component={MotionViewport}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <m.div variants={varFade().inUp}>
        <Typography
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight="bold"
        >{`Haven't found the right help?`}</Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label="Name" />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label="Email" />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label="Subject" />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Enter your message here."
          multiline
          rows={4}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained">
          Submit Now
        </Button>
      </m.div>
    </Box>
  );
}
