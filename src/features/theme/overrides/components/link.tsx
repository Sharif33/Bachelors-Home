/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Link(_theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  };
}
