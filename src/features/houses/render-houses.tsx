import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import formatDate from "../../hooks/formate-date";
import getLocalNumber from "../../hooks/use-number-format";
import { IHouses } from "../faker/fake-post";
import "./styles.css";

interface Props {
  house: IHouses;
}

const RenderHouses = ({ house }: Props) => {
  const {
    houseType,
    bedRoom,
    bathRoom,
    location: { upazilla, district, division, address },
    houseRent,
    availableFrom,
    images,
    _id,
    preferredGender,
  } = house;

  const navigate = useNavigate();
  const handleHouseClick = () => {
    navigate(`/houses/${_id}`);
  };
  return (
    <Card
      onClick={handleHouseClick}
      sx={{
        mb: 3,
        cursor: "pointer",
        border: "dashed 1px #e0e0e0",
        // boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 10px",
        boxShadow: "none",
        "&:hover": { border: "dashed 1px #00A76F" },
        blur: 20,
        opacity: 0.9,
        backgroundImage:
          "url(https://minimals.cc/assets/red-blur.png),url(https://minimals.cc/assets/cyan-blur.png)",
        animation: "rotateBackground 20s linear infinite",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top right, left bottom",
        backgroundSize: "50%, 50%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "start",
        }}
      >
        {house?.images?.length > 0 && (
          <Box
            component="img"
            src={images[0]}
            alt={houseType}
            sx={{
              width: { md: "250px", xs: "auto" },
              height: { md: "200px", xs: "200px" },
            }}
          />
        )}
        <Stack
          direction="column"
          spacing={1}
          p={2}
          sx={{ color: "gray", fontWeight: 300 }}
        >
          <Typography
            variant="h6"
            fontSize={{ md: 24, xs: 16 }}
            color="primary.main"
          >
            {houseType} available at {upazilla} ({preferredGender})
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: "self-start",
              justifyContent: "space-between",
              width: "100%",
              gap: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DomainOutlinedIcon sx={{ mr: 1 }} />
              <Typography variant="body2">House Type: {houseType}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <KingBedOutlinedIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Bedroom: {bedRoom}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ShowerOutlinedIcon sx={{ mr: 1 }} />
              <Typography variant="body2">Washroom: {bathRoom}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Available From: {formatDate(availableFrom)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PaymentsOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Rent: {getLocalNumber(Number(houseRent))} &#2547;/month
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PlaceOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Location: {address}, {upazilla}, {district}, {division}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default RenderHouses;
