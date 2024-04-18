import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputRightElement,
  Link,
  Box,
  Avatar,
  FormControl,
  chakra,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { FaUserAlt } from "react-icons/fa";
import AuthLayout from "../../layouts/AuthLayout";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const CFaUserAlt = chakra(FaUserAlt);

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  nama: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

function Register() {
  return (
    <AuthLayout>
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Register</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <Formik
          initialValues={{
            username: "",
            nama: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
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
                    <InputRightElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      type="text"
                      name="nama"
                      placeholder="Your fullname"
                    />
                  </InputGroup>
                  {errors.nama && touched.nama ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Your Field Name is Error</AlertTitle>
                      <AlertDescription>{errors.nama}</AlertDescription>
                    </Alert>
                  ) : null}
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      type="text"
                      name="username"
                      placeholder="Your Username"
                    />
                  </InputGroup>
                  {errors.username && touched.username ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Your Field username is Error</AlertTitle>
                      <AlertDescription>{errors.username}</AlertDescription>
                    </Alert>
                  ) : null}
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="email address"
                    />
                  </InputGroup>
                  {errors.email && touched.email ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Your Field email is Error</AlertTitle>
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  ) : null}
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      type="password"
                      name="password"
                      placeholder="password"
                    />
                  </InputGroup>
                  {errors.password && touched.password ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Field Password is Error</AlertTitle>
                      <AlertDescription>{errors.password}</AlertDescription>
                    </Alert>
                  ) : null}
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputRightElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </InputGroup>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>Confirm Password Field is Error</AlertTitle>
                      <AlertDescription>{errors.confirmPassword}</AlertDescription>
                    </Alert>
                  ) : null}
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
                Already Have Account
                <Link color="teal.500" href="/login">
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

export default Register;
