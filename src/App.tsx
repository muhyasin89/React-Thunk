import { Route, Routes } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard";

import NotFound from "./pages/NotFound"
import Posts from "./pages/Posts";
import Users from "./pages/Users";

function App() {
  return (
    <>
    <nav>
      <ul></ul>
    </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
