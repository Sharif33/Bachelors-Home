import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, Typography } from "@mui/material";
import { m } from "framer-motion";
import React from "react";
import { varHover } from "../../components/animate/variants copy";

const HomeTopBanner = () => {
  const spinningName = ["Boy", "Girl", "Employee", "Student"];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % spinningName.length);
  };
  React.useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <>
      <Box
        sx={{
          minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
          bgcolor: "background.default",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 3, md: 0 },
        }}
      >
        <Box
          width={1}
          sx={{
            mt: { md: 1.2, xs: 0 },
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box width={1 / 2} sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              component="img"
              src="https://img.freepik.com/free-vector/stay-home-abstract-concept-vector-illustration-forced-isolation-covid19-outbreak-prevention-measures-social-distance-governmental-support-self-protection-wear-mask-abstract-metaphor_335657-4138.jpg?w=826&t=st=1692101377~exp=1692101977~hmac=b1e7226f3313a03be33fd25f8c7d9a3826b7cfd029079ba4350f9735f5c8eecc"
              alt="banner"
              width={1 / 2}
              mx="auto"
              height={1 / 3}
            />
          </Box>

          <Box width={{ xs: "100%", md: 1 / 2 }} ml="auto">
            <Typography
              component="div"
              fontWeight={800}
              fontSize={{ xs: "1.5rem", md: "3.5rem" }}
              lineHeight={1.2}
              // width={{ xs: "100%", md: "45rem" }}
              sx={{ color: "dark" }}
            >
              Are you a <br />
              <Typography
                component="span"
                fontWeight={800}
                fontSize={{ xs: "1.5rem", md: "3.5rem" }}
                lineHeight={1.2}
                sx={{
                  background:
                    "-webkit-linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                Bachelor {spinningName[activeIndex]}
              </Typography>{" "}
              ?
            </Typography>
            <Typography
              component="div"
              fontWeight={500}
              fontSize="1rem"
              sx={{
                color: "rgb(145, 158, 171)",
                fontStyle: "italic",
                flexWrap: "wrap",
                pt: 3,
              }}
            >
              We are here to help you find the perfect place for the bachelor to
              live all over Bangladesh <br /> and give you the best mess
              experience.
            </Typography>{" "}
            <br />
            <Button
              component={m.button}
              whileTap="tap"
              whileHover="hover"
              variants={varHover(1.05)}
              variant="contained"
              sx={{
                mt: 2,
                px: 4,
                py: 2,
              }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Go to houses
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeTopBanner;
