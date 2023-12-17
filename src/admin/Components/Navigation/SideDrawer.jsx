import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import logo from "../../../assets/images/hospital-logo.png";

const SideDrawer = ({
  container,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
  drawer,
}) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#fafafa",
          },
          "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#fafafa",
            // border: "none",
            borderRight: " 1px solid #f2f4f9",
            boxShadow: "0 8px 10px #b7c0ce33",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
          "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#fafafa",
            borderRight: " 1px solid #f2f4f9",
            boxShadow: "0 8px 10px #b7c0ce33",
          },
        }}
        open
      >
        <Box>
          <div className="flex justify-center items-center mt-20">
            <img src={logo} className="w-12 mr-3" alt="hospital logo" />
            <h1 className="text-2xl font-bold text-[#034694]">Chelsea</h1>
          </div>
        </Box>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
