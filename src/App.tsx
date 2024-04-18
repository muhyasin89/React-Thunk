import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";

//import { ProtectedRoute } from "./middleware/protectedRouter";


function App() {
  return (
    <ChakraProvider>
        <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="dashboard" element={<Dashboard /> } />
            {/* </Route> */}
        </Route>
       

      </Routes>
    </ChakraProvider>
  );
}

export default App;
