/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function AppBar(_theme: Theme) {
  return {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },

      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  };
}
