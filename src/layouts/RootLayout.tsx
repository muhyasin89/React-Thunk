import { SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function RootLayout() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Outlet />
      </SimpleGrid>
      <ToastContainer />
    </>
  );
}

export default RootLayout;
