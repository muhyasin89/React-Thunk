import { Button } from "@chakra-ui/react";
import { useApp } from "../state/app";

import { Spinner } from "@chakra-ui/react";
import React from "react";

interface RButtonInterface {
  onClick: React.FC;
  text: string;
  size: string;
  spinnerPlacement: string | any;
  color: string;
}

const RButton: React.FC<RButtonInterface> = ({
  onClick,
  text,
  size,
  spinnerPlacement,
  color,
}) => {
  const loading = useApp((state) => state.loading);

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
