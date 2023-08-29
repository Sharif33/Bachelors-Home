// @mui
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import AvatarShape from "../../../assets/illustrations/avatar-shape";
import Image from "../../../components/image/image";
import { REQUEST_HOUSES } from "../../faker/fake-house-request";
import { USERS } from "../../faker/fake-user";
export default function UserCard() {
  const theme = useTheme();
  let { _id } = useParams();
  const house_requester = REQUEST_HOUSES?.find((house) => house._id === _id);
  return (
    <Card
      sx={{
        textAlign: "center",
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        bgcolor: theme.palette.background.paper,
        borderRadius: 3,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <AvatarShape
          sx={{
            left: 0,
            right: 0,
            zIndex: 10,
            mx: "auto",
            bottom: -26,
            position: "absolute",
          }}
        />

        <Avatar
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: "auto",
            position: "absolute",
            bgcolor: "primary.main",
          }}
          src={house_requester?.avatar || USERS[0].avatar}
        />

        <Image
          src="https://img.freepik.com/free-vector/stay-home-abstract-concept-vector-illustration-forced-isolation-covid19-outbreak-prevention-measures-social-distance-governmental-support-self-protection-wear-mask-abstract-metaphor_335657-4138.jpg?w=826&t=st=1692101377~exp=1692101977~hmac=b1e7226f3313a03be33fd25f8c7d9a3826b7cfd029079ba4350f9735f5c8eecc"
          alt="https://minimals.cc/assets/red-blur.png"
          ratio="16/9"
          overlay="rgba(22, 28, 36, 0.48)"
        />
      </Box>

      <ListItemText
        sx={{ mt: 7, mb: 1 }}
        primary={`${house_requester?.firstName} ${house_requester?.lastName}`}
        secondary={house_requester?.phone}
        primaryTypographyProps={{ typography: "subtitle1" }}
        secondaryTypographyProps={{ component: "span", mt: 0.5 }}
      />

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{ py: 3, typography: "subtitle1" }}
      >
        <div>
          <Typography
            variant="caption"
            component="div"
            sx={{ mb: 0.5, color: "text.secondary" }}
          >
            Live
          </Typography>
          @{house_requester?.upazilla}, {house_requester?.district}
        </div>

        <div>
          <Typography
            variant="caption"
            component="div"
            sx={{ mb: 0.5, color: "text.secondary" }}
          >
            From
          </Typography>
          @{house_requester?.upazilla}, {house_requester?.district}
        </div>
      </Box>
    </Card>
  );
}
