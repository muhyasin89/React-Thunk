import { Spinner } from '@chakra-ui/react'
import AuthLayout from '../layouts/AuthLayout'

function BoxSpinner() {
  return (
    <AuthLayout>
        <Spinner size="lg"/>
    </AuthLayout>
  )
}

export default BoxSpinner