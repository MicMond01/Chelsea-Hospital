import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import usaIcon from "../../../assets/images/united-states-flag-icon.svg";
import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import AdminAvatar from "../../../assets/images/avater1.jpg";
import MenuDropDown from "../../../global-components/MenuDropDown";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const drawerWidth = 240;

const NavigationBar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      icon: Person2OutlinedIcon,
      label: "Account",
    },
    {
      icon: MailOutlinedIcon,
      label: "Inbox",
    },
    {
      icon: ConstructionOutlinedIcon,
      label: "Settings",
    },
    {
      icon: LogoutOutlinedIcon,
      label: "Logout",
    },
  ];

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#fafafa",
        boxShadow: "3px 0 10px #b7c0ce33",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          <IconButton color="gray">
            <NotificationsActiveOutlinedIcon />
          </IconButton>
          <IconButton color="gray">
            <Avatar
              src={usaIcon}
              alt="usa icon"
              variant="rounded"
              sx={{ height: "1rem", width: "1.4rem" }}
            />
          </IconButton>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            edge="start"
            sx={{
              marginLeft: "0.3rem",
              borderRadius: 0, // Set borderRadius to 0 for a square ripple effect
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)", // Optional: Change the hover background color
              },
            }}
          >
            <Typography sx={{ color: "black" }}>Peter Obi</Typography>
            <Avatar
              src={AdminAvatar}
              alt="admin image"
              sx={{
                marginLeft: "0.3rem",
                height: "2rem",
                width: "2rem",
              }}
            />
          </IconButton>
          <MenuDropDown
            handleClose={handleClose}
            anchorEl={anchorEl}
            open={open}
            menuItems={menuItems}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
