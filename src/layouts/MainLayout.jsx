import Box from "@mui/material/Box";



import { useNavigation } from "../state/navigation"


function MainLayout({children}) {
    const open = useNavigation((state)=> state.open);

  return (
    <Box sx={{ display: "flex" }}>
      
        {children}
      
    </Box>
  );
}

export default MainLayout;
