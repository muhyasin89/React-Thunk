import AdminLayout from "../layouts/AdminLayout";
import { Heading, Highlight, Text } from "@chakra-ui/react";

import BoxSpinner from "../components/BoxSpinner";
import { useGetMe } from "../features/dashboard/useGetMe";

function Dashboard() {
  const { data: user, isLoading, isError, error } = useGetMe();

  let content;
  if (isLoading) {
    content = <BoxSpinner />;
  } else if (isError) {
    <Text>Error: {error}</Text>;
  } else {
    content = (
      <Heading lineHeight="tall">
        {user?.map((item) => (
          <Highlight
            query="test"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Welcome Back {item.username}!
          </Highlight>
        ))}
      </Heading>
    );
  }

  return <AdminLayout>{content}</AdminLayout>;
}

export default Dashboard;
