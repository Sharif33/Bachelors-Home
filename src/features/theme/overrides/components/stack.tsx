/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Stack(_theme: Theme) {
  return {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  };
}
