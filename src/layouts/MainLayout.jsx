import Box from "@mui/material/Box";


import Navigation from "../components/Navigation/Index";
import HeadBar from "../components/Navigation/HeadBar";
import { DrawerHeader, Main } from "../components/Navigation/Utility";
import { useNavigation } from "../state/navigation"


function MainLayout({children}) {
    const open = useNavigation((state)=> state.open);

  return (
    <Box sx={{ display: "flex" }}>
        <HeadBar />
      <Navigation />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

export default MainLayout;
