import { m } from "framer-motion";
import MotionViewport from "../../components/animate/motion-viewport";
// @mui
import { Avatar, Box, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { varFade } from "../../components/animate/variants copy";

// ----------------------------------------------------------------------

interface ContactOwnerProps {
  contactName: string;
  contactNo: string;
  contactEmail: string;
  contactAddress: string;
  houseType: string;
}

export default function ContactOwner({
  contactName,
  contactNo,
  contactEmail,
  contactAddress,
  houseType,
}: ContactOwnerProps) {
  return (
    <Box
      component={MotionViewport}
      display="flex"
      flexDirection="column"
      gap={3}
      width={1}
    >
      <m.div variants={varFade().inUp}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          sx={{
            blur: 20,
            opacity: 0.9,
            backgroundImage:
              "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top right, left bottom",
            backgroundSize: "50%, 50%",
            p: 2,
            borderRadius: 1,
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {contactName}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {contactNo}
            </Typography>
          </Box>

          <Avatar sx={{ bgcolor: "primary.main", width: 100, height: 100 }}>
            SR
          </Avatar>
        </Box>
      </m.div>

      <m.div variants={varFade().inUp}>
        <FormHelperText>*Contact us for more information.</FormHelperText>
        <TextField fullWidth label="Name" />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField fullWidth label="Email" />
      </m.div>

      <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Enter your message here."
          defaultValue={`I would like to inquire about your ${houseType}. Please contact me at your earliest convenience.`}
          multiline
          rows={4}
        />
      </m.div>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained" sx={{ width: 1 }}>
          Send Message
        </Button>
      </m.div>
    </Box>
  );
}
