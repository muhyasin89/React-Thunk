import { Button, Spinner } from "@chakra-ui/react";

import React from "react";

interface RButtonInterface {
  onClick: React.FC;
  text: string;
  size: string;
  loading: boolean;
  spinnerPlacement: string | any;
  color: string;
}

const RButton: React.FC<RButtonInterface> = ({
  onClick,
  loading,
  text,
  size,
  spinnerPlacement,
  color,
}) => {

  return (
    <Button
      onClick={onClick}
      isDisabled={loading}
      isLoading={loading}
      loadingText={text}
      size={size || "md"}
      spinnerPlacement={spinnerPlacement || "start"}
      colorScheme={color || "gray"}
    >
      {!loading ? text : <Spinner size="md" />}
    </Button>
  );
};

export default RButton;
