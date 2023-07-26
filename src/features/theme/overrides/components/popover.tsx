import { listClasses } from "@mui/material/List";
import { Theme } from "@mui/material/styles";
//
import { paper } from "../../css.ts";

// ----------------------------------------------------------------------

export default function Popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          ...paper({ theme, dropdown: true }),
          [`& .${listClasses.root}`]: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
  };
}
