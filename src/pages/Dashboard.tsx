// import { useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { Heading , Highlight}  from "@chakra-ui/react";
import { useUserStore } from "../state/user";

function Dashboard() {
  const name = useUserStore((state) => state.name)
  // useEffect(() => {
  //   
  // })

  return (
    <AdminLayout>
      <Heading lineHeight="tall">
        <Highlight
          query={name}
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
         Welcome Back {{name}}!
        </Highlight>
      </Heading>
    </AdminLayout>
  );
}

export default Dashboard;
