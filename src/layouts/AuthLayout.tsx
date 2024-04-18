import { Flex, Stack, Box, Link } from "@chakra-ui/react";

function AuthLayout({ children }) {
  return (
    <Box minW={{ base: "100%"}}>
        <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
     
    </Flex>
    </Box>
    
  );
}

export default AuthLayout;
