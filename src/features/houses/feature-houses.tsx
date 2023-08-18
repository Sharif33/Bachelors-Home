import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { AnimatePresence, m } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { varHover } from "../../components/animate/variants copy";
import { HOUSES, IHouses } from "../faker/fake-post";

const FeatureHouses = () => {
  const isMd = useMediaQuery((theme: any) => theme.breakpoints.up("md"));
  const [houses, setHouses] = React.useState<IHouses[]>(HOUSES);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const nextIndex = activeIndex + (isMd ? 4 : 2);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + (isMd ? 3 : 2)) % houses.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - (isMd ? 3 : 2)) % houses.length);
  };

  React.useEffect(() => {
    const interval = setInterval(handleNext, 20000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  React.useEffect(() => {
    const sortedHouses = HOUSES.sort((a: any, b: any) =>
      a.houseRent < b.houseRent ? 1 : -1
    );
    setHouses(sortedHouses);
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { md: 10, xs: 2 },
        width: { md: 2 / 3, xs: 1 },
        minHeight: { md: "calc(100vh - 64px)" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ md: 2, xs: 1 }}
        mb={{ md: 5, xs: 2 }}
      >
        <Typography
          fontWeight={300}
          variant="caption"
          sx={{
            color: "rgb(145, 158, 171)",
            textTransform: "uppercase",
          }}
        >
          Featured Houses
        </Typography>
        <IconButton
          onClick={handlePrev}
          size={isMd ? "medium" : "small"}
          sx={{ border: 1 }}
          color="primary"
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          disabled={activeIndex === 0}
        >
          <ArrowRightAltIcon sx={{ transform: "rotate(180deg)" }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          size={isMd ? "medium" : "small"}
          sx={{ border: 1 }}
          color="primary"
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
        >
          <ArrowRightAltIcon />
        </IconButton>

        <Button
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.03)}
          size="small"
          color="inherit"
          onClick={() => navigate("/houses")}
          sx={{
            color: "rgb(145, 158, 171)",
            fontWeight: 300,
            fontSize: "0.75rem",
          }}
        >
          View All
        </Button>
      </Stack>
      <ImageList
        sx={{
          width: { md: 1, xs: 1 },
          height: { md: 400, xs: 150 },
          borderRadius: 1,
          mx: "auto",
        }}
        variant="woven"
        cols={isMd ? 4 : 2}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {houses.slice(activeIndex, nextIndex).map((item) => (
            <ImageListItem
              component={m.div}
              key={item._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{ overflow: "hidden" }}
            >
              <img
                src={`${item.images[0]}?w=248&fit=crop&auto=format`}
                srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.houseType}
                // loading="lazy"
              />
              <ImageListItemBar
                title={item.houseType}
                subtitle={`@${item.location.district}`}
                sx={{
                  "& .MuiImageListItemBar-subtitle": {
                    fontSize: "0.75rem",
                    pb: 0.5,
                  },
                }}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.houseType}`}
                    onClick={() => navigate(`/houses/${item._id}`)}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </AnimatePresence>
      </ImageList>
    </Box>
  );
};

export default FeatureHouses;
