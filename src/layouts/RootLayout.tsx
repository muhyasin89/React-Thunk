import { SimpleGrid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <SimpleGrid columns={1} >
        <Outlet />
    </SimpleGrid>
  )
}

export default RootLayout