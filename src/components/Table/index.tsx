import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
  
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function TableChakra({children}) {
  return (
    <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {children}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
  )
}

export default TableChakra