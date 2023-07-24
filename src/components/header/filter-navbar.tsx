import { AppBar, Toolbar, Typography } from "@mui/material";

const FilterNavbar = ({ width }: { width: number }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "white",
        backdropFilter: "blur(20px)",
        borderBottom: "dashed 1px #e0e0e0",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 10px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          color="black"
          width={width}
        >
          Bachelors Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default FilterNavbar;
