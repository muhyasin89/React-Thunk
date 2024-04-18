import {
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Link,
    Box,
    Avatar,
    FormControl,
    chakra,

  } from "@chakra-ui/react";

  import { FaUserAlt } from "react-icons/fa";
  import AuthLayout from "../../layouts/AuthLayout";
  
  const CFaUserAlt = chakra(FaUserAlt);


function Register() {
  return (
    <AuthLayout>
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Register</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>

            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            >
              Login
            </Button>
          </Stack>
          <Box>
            New to us?
            <Link color="teal.500" href="/signup">
                Sign Up
            </Link>
            </Box>
        </form>
        </Box>
    </AuthLayout>
  )
}

export default Register