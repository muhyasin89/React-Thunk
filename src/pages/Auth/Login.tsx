import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../facade/axios";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  // InputLeftElement,
  // chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
//import { FaUserAlt, FaLock } from "react-icons/fa";
import AuthLayout from "../../layouts/AuthLayout";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AlertError from "../../components/AlertError";
import { useAppStore } from "../../state/app";
import {  useUserStore } from "../../state/user";
import errorAxios from "../../facade/axiosError";

// const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const setLoading = useAppStore((state)=> state.setLoading);
  const isLoading = useAppStore((state)=> state.loading);
  const {token, refreshToken, updateToken, updateRefreshToken} = useUserStore()


  return (
    <AuthLayout>
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Login</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            
            try {
              setLoading(true)
     
              axios
                .post("token/", {
                  username: values.username,
                  password: values.password,
                })
                .then((response) => {
                  

                  // console.log("data",response.data)
                  const tokenRes :string= response.data.access;
                  const refreshTokenRes :string= response.data.refresh;
                  console.log("token", tokenRes, refreshTokenRes)
                  updateToken(tokenRes);
                  updateRefreshToken(refreshTokenRes);
                  
                  console.log("userState", token, refreshToken);
                }).catch((error)=>{
                  console.log("err", error);
                  errorAxios(error);
                });

                setLoading(false);
            } catch (err) {
              setLoading(false)
              toast.error(JSON.stringify(err?.msg), {
                position: "top-right",
              });
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    {/* <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    /> */}

                    <Field
                      as={Input}
                      type="text"
                      name="username"
                      placeholder="username"
                    />
                  </InputGroup>
                  {errors.username && touched.username ? (
                    <AlertError
                      nameField="username"
                      errorField={errors.username}
                    />
                  ) : null}
                </FormControl>
                <FormControl>
                  <InputGroup>
                    {/* <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    /> */}

                    <Field
                      as={Input}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                    />

                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.password && touched.password ? (
                    <AlertError
                      nameField="password"
                      errorField={errors.password}
                    />
                  ) : null}
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                >
                  Login
                </Button>
              </Stack>

              <Box>
                New to us?
                <Link color="teal.500" href="/register">
                  Sign Up
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthLayout>
  );
}

export default Login;
