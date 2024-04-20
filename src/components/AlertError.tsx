import React from "react";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";

const AlertError = ({nameField, errorField}): JSX.Element => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Field {nameField} is Error</AlertTitle>
      <AlertDescription>{errorField}</AlertDescription>
    </Alert>
  );
}

export default AlertError;
