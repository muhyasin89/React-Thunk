import TableChakra from "../components/Table";
import AdminLayout from "../layouts/AdminLayout";
import { Tr, Td, Box, SimpleGrid } from "@chakra-ui/react";

function Dashboard() {
  return (
    <AdminLayout>
      <Box m="2">
        <SimpleGrid columns={2}>
          <Box>Dashboard</Box>
        </SimpleGrid>
        <SimpleGrid columns={1}>
          <TableChakra>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </TableChakra>
        </SimpleGrid>
      </Box>
    </AdminLayout>
  );
}

export default Dashboard;
