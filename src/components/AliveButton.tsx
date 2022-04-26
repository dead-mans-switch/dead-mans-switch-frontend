import { Button, useToast } from "@chakra-ui/react";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import * as React from "react";

import { useDeadmanContract } from "~/hooks/deadman";
import Address from "~/components/Address";

export function AliveButton() {
  const { account } = useStarknet();
  const { contract: deadman } = useDeadmanContract();
  const { invoke, loading, data } = useStarknetInvoke({
    contract: deadman,
    method: "alive",
  });
  const toast = useToast();

  React.useEffect(() => {
    if (data) {
      toast({
        title: "Transaction sent",
        description: <Address address={data} link={false} />,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [data]);

  return (
    <>
      <Button
        onClick={() => invoke({ args: [] })}
        disabled={!account}
        isLoading={loading}
      >
        I'm alive!
      </Button>
    </>
  );
}
