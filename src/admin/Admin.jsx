import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import React from "react";
import {
  Box,
  Collapse,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./Components/Navigation/NavigationBar";
import SideDrawer from "./Components/Navigation/SideDrawer";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LocalPharmacyOutlinedIcon from "@mui/icons-material/LocalPharmacyOutlined";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";

const drawerWidth = 240;

const sideMenu = [
  {
    icon: SpaceDashboardOutlinedIcon,
    title: "Dashboard",
    path: "dashboard",
  },
  {
    icon: AssignmentOutlinedIcon,
    title: "Appointments",
    path: "appointments",
    submenus: [
      {
        icon: EditNoteOutlinedIcon,
        title: "Dead",
        path: "appointments/viewAppointments",
      },
      {
        icon: EditNoteOutlinedIcon,
        title: "Birth",
        path: "appointments/bookApointments",
      },
    ],
  },
  {
    icon: MasksOutlinedIcon,
    title: "Doctors",
    path: "doctors",
  },
  {
    icon: PeopleOutlinedIcon,
    title: "Staf",
    path: "staff",
  },
  {
    icon: SickOutlinedIcon,
    title: "Patients",
    path: "patients",
  },
  {
    icon: MonetizationOnOutlinedIcon,
    title: "Billing",
    path: "billing",
  },
  {
    icon: EditNoteOutlinedIcon,
    title: "Records",
    path: "records",
    submenus: [
      {
        icon: EditNoteOutlinedIcon,
        title: "Dead",
        path: "records/dead",
      },
      {
        icon: EditNoteOutlinedIcon,
        title: "Birth",
        path: "records/birth",
      },
    ],
  },
  {
    icon: AirportShuttleOutlinedIcon,
    title: "Ambulance",
    path: "ambulance",
  },
  // { icon: "", title: "Departory" },
];

const MenuItem = ({ icon: Icon, title, path, currentPath, submenus }) => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleNavigate = (path) => {
    navigate(`/admin/${path}`);

    // if (submenus && submenus.length > 0) {
    //   handleClick();
    //   console.log("Clicked menu item has submenus");
    //   // You can add your logic to handle submenus here
    // } else {
    //   console.log("Clicked menu item does not have submenus");
    //   // Handle the logic for items without submenus
    // }
  };

  const handleClick = (path) => {
    if (submenus && submenus.length > 0) {
      setOpen(!open);
    } else {
      navigate(`/admin/${path}`);
    }
  };

  const handleSubMenuClick = (path) => {
    navigate(`/admin/${path}`);
  };
  return (
    <React.Fragment>
      <ListItemButton
        sx={{
          width: "95%",
          backgroundColor:
            currentPath === `/admin/${path}` ? "#f0f3fb" : "inherit",
          color: currentPath === `/admin/${path}` ? "#000" : "inherit",
        }}
        onClick={() => handleClick(path)}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
        {submenus && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenus &&
            submenus.map((subItem, index) => (
              <ListItemButton
                onClick={() => handleSubMenuClick(subItem.path)}
                key={index}
                sx={{
                  pl: 4,
                  width: "95%",
                  backgroundColor:
                    currentPath === `/admin/${subItem.path}`
                      ? "#f0f3fb"
                      : "inherit",
                  color:
                    currentPath === `/admin/${subItem.path}`
                      ? "#000"
                      : "inherit",
                }}
              >
                <ListItemIcon>
                  <subItem.icon />
                </ListItemIcon>
                <ListItemText primary={subItem.title} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

function Admin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List
        sx={{
          m: " 0 1rem",
          borderRadius: "1rem",
        }}
      >
        {sideMenu.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            path={item.path}
            currentPath={location.pathname}
            submenus={item?.submenus}
          />
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar
        handleDrawerToggle={handleDrawerToggle}
        handleClick={handleClick}
        open={open}
      />

      <SideDrawer
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        drawer={drawer}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#f0f3fb",
          height: "100vh",
        }}
      >
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Admin;
