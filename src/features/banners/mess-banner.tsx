import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, Container, Typography } from "@mui/material";
import { m } from "framer-motion";
import { useState } from "react";
import messDashboard from "../../assets/lottie/lottie-mess-dashboard.json";
import MotionContainer from "../../components/animate/motion-container";
import { varBounce, varHover } from "../../components/animate/variants copy";
import CreateMessModal from "../../components/modal/create-mess-modal";
import Lottiefiles from "../lottie-files/lottie-files";

const MessBanner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MotionContainer>
        <Container>
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
              mb: 10,
              mt: -10,
            }}
          >
            <Box width={1} p={3}>
              <m.div variants={varBounce().in}>
                <Typography
                  fontWeight={700}
                  fontSize="0.75rem"
                  sx={{
                    color: "rgb(145, 158, 171)",
                    textTransform: "uppercase",
                  }}
                >
                  Are you a mess owner/ manager? Are you tired of managing your
                  mess?
                </Typography>
              </m.div>
              <Box sx={{ mt: { md: 1.2, xs: 0 } }}>
                <m.div variants={varBounce().in}>
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
                </m.div>
                <m.div variants={varBounce().in}>
                  <Button
                    component={m.button}
                    whileTap="tap"
                    whileHover="hover"
                    variants={varHover(1.05)}
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                      mt: 2,
                      width: { xs: 1, md: 1 / 4 },
                      py: 1.5,
                    }}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    Create Mess
                  </Button>
                </m.div>
              </Box>
            </Box>
            <Box
              width={{ xs: 1, md: 1 / 2 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="white"
            >
              <m.div variants={varBounce().in}>
                <Lottiefiles image={messDashboard} height={300} />
              </m.div>
            </Box>
          </Box>
        </Container>
      </MotionContainer>
      <CreateMessModal open={open} handleClose={handleClose} />
    </>
  );
};

export default MessBanner;
