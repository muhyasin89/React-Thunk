import { Route, Routes } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard";

import NotFound from "./pages/NotFound"
import Posts from "./pages/Posts/Index";
import Users from "./pages/Users";
import AddForm from "./pages/Posts/Add";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { ProtectedRoute } from "./middleware/protected_route";



function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/add" element={<AddForm />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

export default App;
