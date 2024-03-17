import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import AppNavBar from "../components/Navigation/AppNavBar";
import SideBar from "../components/Navigation/SideBar";
import { drawerWidth } from "../components/Navigation/utils";

function MainLayout({ children }) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppNavBar />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
