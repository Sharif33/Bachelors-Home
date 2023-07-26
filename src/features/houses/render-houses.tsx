import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { IHouses } from "../faker/fake-post";

interface Props {
  house: IHouses;
}

const RenderHouses = ({ house }: Props) => {
  const navigate = useNavigate();

  const handleHouseClick = () => {
    navigate(`/discusion/${house._id}`);
  };
  return (
    <Card onClick={handleHouseClick} sx={{ mb: 3, cursor: "pointer" }}>
      <Box sx={{ display: "flex", justifyContent: "start" }}>
        {house?.images?.length > 0 && (
          <img
            src={house?.images[0]}
            alt={house?.houseType}
            style={{ width: "250px", height: "220px" }}
          />
        )}
        <Stack direction="column" spacing={1} p={2}>
          <Typography variant="h6">
            {house.houseType} available at {house?.location?.upazilla}
          </Typography>
          <Typography variant="subtitle1">{house.location.address}</Typography>

          <Typography variant="h6">{house.houseRent}</Typography>
          <Typography variant="subtitle1">per month</Typography>
          <Typography variant="subtitle1">{house.availableFrom}</Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default RenderHouses;
