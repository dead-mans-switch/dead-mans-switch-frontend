import { Box, Button } from "@chakra-ui/react";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import * as React from "react";
import { useDeadmanContract } from "~/hooks/deadman";

export function AliveButton() {
  const { account } = useStarknet();
  const { contract: deadman } = useDeadmanContract();
  const { invoke, ...rest } = useStarknetInvoke({
    contract: deadman,
    method: "alive",
  });

  return (
    <>
      <Button onClick={() => invoke({ args: [] })} disabled={!account}>
        Alive
      </Button>
      <Box as="pre">
        <Box as="code" color="white">
          {JSON.stringify(rest, null, 2)}
        </Box>
      </Box>
    </>
  );
}
