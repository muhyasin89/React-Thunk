import Box from "@mui/material/Box";
import Navigation from "../components/Navigation/Index";


function MainLayout({children}) {

  return (
    <>
        <Navigation />
        {children}
      
    </>
  );
}

export default MainLayout;
