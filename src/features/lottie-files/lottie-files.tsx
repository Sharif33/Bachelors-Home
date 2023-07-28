import { Box } from "@mui/material";
import Lottie from "lottie-react";

interface Props {
  height?: number | string;
  image?: any;
}

const Lottiefiles = ({ height, image }: Props) => {
  return (
    <Box
      component={Lottie}
      animationData={image}
      loop
      sx={{ height: height ? height : "auto", width: "auto", margin: "auto" }}
    />
  );
};

export default Lottiefiles;
