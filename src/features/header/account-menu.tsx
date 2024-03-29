import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Logout from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { m } from "framer-motion";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { varHover } from "../../components/animate/variants copy";
import routesConfig from "../../routes/routes.config";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const { user, logOut } = React.useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("You are logged out");
      })
      .catch((error: any) => console.log(error));
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
            }}
          >
            S
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#F2FBFD",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // disableScrollLock={true}
      >
        <Box sx={{ p: 2, pb: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.email}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <MenuItem
          onClick={() => {
            navigate(routesConfig.DASHBOARD), handleClose;
          }}
        >
          <ListItemIcon>
            <DashboardOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routesConfig.CREATE_HOUSE_POST), handleClose;
          }}
        >
          <ListItemIcon>
            <AddHomeWorkOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Submit House
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate(routesConfig.CREATE_HOUSE_REQUEST), handleClose;
          }}
        >
          <ListItemIcon>
            <AddHomeOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Create House Request
        </MenuItem>
        <MenuItem onClick={handleLogOut} sx={{ color: "error.main" }}>
          <ListItemIcon>
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
