import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { m } from "framer-motion";
// import Slider from "@mui/material/Slider";
import React from "react";
import { varHover } from "../animate/variants copy";

export interface CarouselItem {
  image?: string;
  text?: string;
}

interface CustomCarouselProps {
  items: CarouselItem[];
  loop?: boolean;
  tab?: boolean;
  button?: boolean;
  delay?: number;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items,
  loop = true,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    if (loop) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, loop]);

  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={{ position: "relative" }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: index === activeIndex ? "block" : "none",
              width: "100%",
            }}
          >
            {item.image && (
              <Box
                component="img"
                src={item.image}
                alt={`Slide ${index}`}
                sx={{
                  width: 1,
                  height: { md: 500, xs: 150 },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            )}
            {item.text && <div>{item.text}</div>}
          </Box>
        ))}

        <React.Fragment>
          <IconButton
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={varHover(1.05)}
            aria-label="previous"
            onClick={handlePrevious}
            sx={{
              position: "absolute",
              left: "-20px",
              top: "50%",
            }}
            // disabled={activeIndex === 0}
            style={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={varHover(1.05)}
            aria-label="next"
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: "-20px",
              top: "50%",
            }}
            style={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </React.Fragment>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {items.map((item, index) => (
          <Box
            component="img"
            key={index}
            src={item.image}
            alt={`Slide ${index}`}
            sx={{
              width: 75,
              height: 50,
              cursor: "pointer",
              opacity: index === activeIndex ? 1 : 0.5,
              borderRadius: 1,
            }}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default CustomCarousel;
