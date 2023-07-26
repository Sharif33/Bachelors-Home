import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./custom-theme";

const CustomThemeProvider = ({ children }: { children: any }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
