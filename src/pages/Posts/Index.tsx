
import { Link } from "react-router-dom";
import TableComponent from "../../components/Table";
import MainLayout from "../../layouts/MainLayout";

function Posts() {
  return (
    <MainLayout>
         <div>Post</div>
         <Link to="/posts/add">
          <button className="btn btn-primary"> Add Form</button>
         </Link>
        <TableComponent />
    </MainLayout>
  )
}

export default Posts