import { Route, Routes } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard";
import  Login  from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
    <nav>
      <ul></ul>
    </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
