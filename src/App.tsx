import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";

import { ProtectedRoute } from "./middleware/protectedRouter";
import SPLList from "./pages/Hublang/BalikNama/SPLList";
import SPLForm from "./pages/Hublang/BalikNama/SPLForm";
import RABList from "./pages/Teknik/RABList";
import BarangForm from "./pages/Teknik/BarangForm";
import BarangList from "./pages/Teknik/BarangList";
import RABForm from "./pages/Teknik/RABForm";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <ChakraProvider>
        <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard /> } />

              <Route path="hublang" element={<SPLList />} >
                <Route path="form" element={<SPLForm />} />
              </Route>

              <Route path="teknik" element={<RABList />}>
                  <Route path="rab/form" element={<RABForm />} />
                  <Route path="barang" element={<BarangList />}>
                    <Route path="form" element={<BarangForm />} />
                  </Route>
                  
              </Route>
            </Route>
        </Route>
      </Routes>
     
    </ChakraProvider>
  );
}

export default App;
