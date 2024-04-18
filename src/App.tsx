import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
