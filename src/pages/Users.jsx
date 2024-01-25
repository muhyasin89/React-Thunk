import Typography from "@mui/material/Typography";
import MainLayout from "../layouts/MainLayout";
import TableComponent from "../components/Table";

import BasicModal from "../components/Modal";

function Users() {
  return (
    <MainLayout>
      <BasicModal children={<>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        </>}/>
      

      <div>Users</div>
      <TableComponent />
    </MainLayout>
  );
}

export default Users;
