import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ComingSoonIllustration from "../../assets/illustrations/coming-soon-illustration";
import { useCountdownDate } from "../../hooks/use-countdown";

export default function ComingSoonView() {
  const { days, hours, minutes, seconds } = useCountdownDate(
    new Date("09/09/2023 00:01")
  );

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 7rem)"
      my="auto"
    >
      <Typography variant="h4" paragraph fontWeight={700}>
        Coming Soon!
      </Typography>

      <Typography sx={{ color: "text.secondary" }}>
        We are currently working hard on this page!
      </Typography>

      <ComingSoonIllustration sx={{ my: { md: 10, xs: 5 }, height: 240 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Box sx={{ mx: { xs: 1, sm: 2.5 } }}>:</Box>}
        sx={{ typography: "h2", fontWeight: "bold", fontFamily: "monospace" }}
      >
        <TimeBlock label="Days" value={days} />

        <TimeBlock label="Hours" value={hours} />

        <TimeBlock label="Minutes" value={minutes} />

        <TimeBlock label="Seconds" value={seconds} />
      </Stack>
    </Stack>
  );
}

type TimeBlockProps = {
  label: string;
  value: string;
};

function TimeBlock({ label, value }: TimeBlockProps) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: "text.secondary", typography: "body1" }}>{label}</Box>
    </div>
  );
}
