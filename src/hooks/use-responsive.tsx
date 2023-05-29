import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsive(
  query: "up" | "down" | "between",
  start: number | Breakpoint,
  end?: number | Breakpoint
): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Breakpoint));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Breakpoint));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start as Breakpoint, end as Breakpoint)
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

export function useWidth(): string {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: string | null, key: string) => {
      const matches = useMediaQuery(theme.breakpoints.up(key as Breakpoint));

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
