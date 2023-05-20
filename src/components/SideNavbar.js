import * as React from "react";
import { DRAWER_WIDTH } from "../constant";
import { useTheme } from "@emotion/react";
import { Box, Drawer } from "@mui/material";
import DrawerTabSection from "./DrawerTabSection";

const SideNavbar = (props) => {
  const { handleDrawerToggle, mobileOpen, window } = props;
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: DRAWER_WIDTH },
        flexShrink: { sm: 0 },
      }}
      aria-label="user info"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: theme.palette.secondary.main,
            borderRight: "0",
          },
        }}
      >
        <DrawerTabSection />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: theme.palette.secondary.main,
            borderRight: "0",
          },
        }}
        open
      >
        <DrawerTabSection />
      </Drawer>
    </Box>
  );
};

export default SideNavbar;
