import { SimpleGrid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function RootLayout() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Outlet />
      </SimpleGrid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}

        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default RootLayout;
