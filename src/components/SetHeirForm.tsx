import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import * as React from "react";

function isValid(address: string) {
  return /^0x[0-9a-f]{64}$/.test(address);
}

export default function SetHeirForm({}): JSX.Element {
  const [trustedAddress, setTrustedAddress] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <Flex direction="column" gap={5}>
      <FormControl isInvalid={error !== ""}>
        <FormLabel htmlFor="trusted-address">Trusted address</FormLabel>
        <Input
          id="trusted-address"
          value={trustedAddress}
          onChange={(e) => setTrustedAddress(e.target.value)}
          placeholder="0x123..."
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      <Button
        onClick={() => {
          if (!isValid(trustedAddress)) {
            setError("Invalid address");
          } else {
            setError("");
          }
        }}
      >
        Add
      </Button>
    </Flex>
  );
}
