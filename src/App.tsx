import { Route, Routes } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard";

import NotFound from "./pages/NotFound"
import Posts from "./pages/Posts/Index";
import Users from "./pages/Users";
import AddForm from "./pages/Posts/Add";

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
        <Route path="/posts/add" element={<AddForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
