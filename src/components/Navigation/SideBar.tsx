import React from "react";
import { drawerWidth } from "./utils";
import Navigation from "./Index";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useNavigation } from "../../state/navigation";

function SideBar() {
    const {open, handleDrawer} = useNavigation();

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Navigation />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Navigation />
      </Drawer>
    </Box>
  );
}

export default SideBar;
