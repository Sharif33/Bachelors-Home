import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routesConfig from "../../routes/routes.config";

const items = [
  {
    title: "Available Houses",
    path: routesConfig.HOUSES,
  },
  {
    title: "Request For House",
    path: routesConfig.CREATE_HOUSE_REQUEST,
  },
  {
    title: "Submit House",
    path: "/post-house",
  },
];

export default function HouseMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMouseEnter}
        sx={{
          color: open ? "#00A76F" : "black",
          fontWeight: "bolder",
          fontSize: "1rem",
          textTransform: "none",
          "&:hover": {
            color: "#00A76F",
            fontWeight: "bolder",
          },
        }}
      >
        Houses
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorPosition={{ top: 200, left: 0 }}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            blur: 20,
            opacity: 0.9,
            backgroundImage:
              "url(https://minimals.cc/assets/cyan-blur.png), url(https://minimals.cc/assets/red-blur.png)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top right, left bottom",
            backgroundSize: "50%, 50%",
            /*  boxShadow: `0 0 2px 0 ${alpha(
                green[100],
                0.24
              )}, -20px 20px 40px -4px ${alpha(green[100], 0.24)}`, */
            // boxShadow:
            //   "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px",
            overflow: "visible",
            border: "dashed 1px #e0e0e0",
            mt: 1.5,
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          "aria-orientation": "vertical",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        aria-label="house-menu"
        aria-controls="primary-search-house-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableScrollLock={true}
      >
        {items.map((item) => (
          <MenuItem
            key={item.title}
            onClick={() => handleMenuItemClick(item.path)}
            sx={{
              color: pathname === item.path ? "#00A76F" : "black",
              px: 2,
              fontWeight: 500,
              "&:hover": {
                color: "#00A76F",
                fontWeight: 500,
              },
            }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
