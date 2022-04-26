import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useStarknet, useStarknetInvoke } from "@starknet-react/core";
import { toBN } from "starknet/dist/utils/number";
import { bnToUint256 } from "starknet/dist/utils/uint256";
import { address as deadmanAddress, useDeadmanContract } from "~/hooks/deadman";

function isValid(address: string) {
  return /^0x[0-9a-f]{64}$/.test(address);
}

export default function Redeem({}): JSX.Element {
  const [address, setAddress] = React.useState("");
  const [error, setError] = React.useState("");

  const { contract: deadman } = useDeadmanContract();
  const { invoke: redeem } = useStarknetInvoke({
    contract: deadman,
    method: "redeem",
  });

  return (
    <Flex direction="column" gap={5}>
      <Heading>Redeem inheritance</Heading>
      <Text>
        Enter the address of the deceased person in order to redeem your
        inheritance. If your wallet address matches the address defined in the
        deceased person's dead man's switch and the timer has elapsed, all
        assets will be transferred from the deceased person's wallet to yours.
      </Text>
      <FormControl isInvalid={error !== ""}>
        <FormLabel htmlFor="address">Deceased address</FormLabel>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="0x123..."
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={() => {
          // if (!isValid(address)) {
          //   setError("Invalid address");
          // } else {
          //   setError("");
          // }
          redeem({ args: [address] });
        }}
      >
        Redeem
      </Button>
    </Flex>
  );
}
