/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  loadingButtonClasses,
  LoadingButtonProps,
} from "@mui/lab/LoadingButton";
import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function LoadingButton(_theme: Theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: LoadingButtonProps }) => ({
          ...(ownerState.variant === "soft" && {
            [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
              left: 10,
            },
            [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
              right: 14,
            },
            ...(ownerState.size === "small" && {
              [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                left: 10,
              },
              [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                right: 10,
              },
            }),
          }),
        }),
      },
    },
  };
}