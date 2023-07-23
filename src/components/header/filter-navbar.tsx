import { AppBar, Toolbar, Typography } from "@mui/material";

const FilterNavbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "white",
        backdropFilter: "blur(20px)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" color="black">
          Bachelors Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default FilterNavbar;
