import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  InputBase,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  alpha,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { boldText } from "../../../hooks/bold-text";
import formatDate from "../../../hooks/formate-date";
import getLocalNumber from "../../../hooks/use-number-format";
import { IReqHouses } from "../../faker/fake-house-request";

interface RenderRequestHousesProps {
  house: IReqHouses;
}

export const RenderRequestHouses = ({ house }: RenderRequestHousesProps) => {
  const {
    _id,
    postDate,
    avatar,
    firstName,
    lastName,
    houseType,
    upazilla,
    district,
    PrferrableRent,
    preferrableDate,
    address,
    description,
  } = house;
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore((prev) => !prev);
  };

  const navigate = useNavigate();
  const handleHouseClick = () => {
    navigate(`/house_request/${_id}`);
  };

  return (
    <Card
      sx={{
        mb: 2,
        boxShadow: "none",
        blur: 20,
        opacity: 0.9,
        /*  backgroundImage:
          "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top right, left bottom",
        backgroundSize: "50%, 50%", */
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <ListItem>
          <ListItemAvatar onClick={handleHouseClick}>
            <Avatar alt="Profile Picture" src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={`${firstName} ${lastName}`}
            secondary={postDate}
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: "bold",
              },
              "& .MuiListItemText-secondary": {
                fontSize: "0.75rem",
              },
            }}
          />
        </ListItem>
        <IconButton
          size="small"
          sx={{
            color: (theme) => alpha(theme.palette.grey[500], 0.32),
            mr: 1.5,
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="body1" mb={2}>
          {boldText(houseType)} neede at {boldText(upazilla)},
          {boldText(district)} within rent{" "}
          {boldText(getLocalNumber(Number(PrferrableRent)))} BDT from{" "}
          {boldText(formatDate(preferrableDate))}
        </Typography>

        <Box>
          {description.length > 150 ? (
            <>
              {seeMore ? (
                <Box>
                  {description}
                  <Button
                    variant="text"
                    onClick={handleSeeMore}
                    sx={{
                      textTransform: "none",
                      p: 0,
                      m: 0,
                    }}
                  >
                    See Less
                  </Button>
                </Box>
              ) : (
                <Box>
                  {description?.slice(0, 150)}...
                  <Button
                    variant="text"
                    onClick={handleSeeMore}
                    sx={{
                      textTransform: "none",
                      p: 0,
                      m: 0,
                    }}
                  >
                    See More
                  </Button>
                </Box>
              )}
            </>
          ) : (
            description
          )}
        </Box>
      </CardContent>

      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
            width: 1,
            py: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "primary.main" }}>S</Avatar>
          <InputBase
            size="small"
            fullWidth
            placeholder="Comment your house link here"
            endAdornment={
              <InputAdornment position="end" sx={{ mr: 1 }}>
                <IconButton
                  size="small"
                  sx={{
                    color: (theme) => alpha(theme.palette.grey[500], 0.32),
                  }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              pl: 1.5,
              height: 40,
              borderRadius: 1,
              border: (theme) =>
                `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
            }}
          />
        </Box>
      </CardActions>
    </Card>
  );
};
