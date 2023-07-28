import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, Typography } from "@mui/material";
import { m } from "framer-motion";
import React from "react";
import messDashboard from "../../../public/assets/lottie/lottie-mess-dashboard.json";
import { varHover } from "../../components/animate/variants copy";
import Lottiefiles from "../lottie-files/lottie-files";

const MessBanner = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        justifyContent="space-between"
        sx={{
          width: 1,
          minHeight: 300,
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)) center center / cover no-repeat, url(https://minimals.cc/assets/background/overlay_4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          borderRadius: 2.5,
        }}
      >
        <Box width={1} p={3}>
          <Typography
            fontWeight={700}
            fontSize="0.75rem"
            sx={{ color: "rgb(145, 158, 171)", textTransform: "uppercase" }}
          >
            Are you a mess owner? Are you tired of managing your mess?
          </Typography>
          <Box sx={{ mt: { md: 1.2, xs: 0 } }}>
            <Typography
              fontWeight={800}
              fontSize={{ xs: "2rem", md: "4rem" }}
              lineHeight={1.2}
              sx={{
                background:
                  "-webkit-linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 100%)",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Make your mess <br /> life easy
            </Typography>
            <Button
              component={m.button}
              whileTap="tap"
              whileHover="hover"
              variants={varHover(1.05)}
              variant="contained"
              sx={{
                mt: 2,
                width: { xs: 1, md: 1 / 4 },
                py: 1.5,
              }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Create Mess
            </Button>
          </Box>
        </Box>
        <Box
          width={{ xs: 1, md: 1 / 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
        >
          <Lottiefiles image={messDashboard} height={300} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MessBanner;
