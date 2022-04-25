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

function isValid(address: string) {
  return /^0x[0-9a-f]{64}$/.test(address);
}

export default function SetSwitch({}): JSX.Element {
  const [trustedAddress, setTrustedAddress] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <Flex direction="column" gap={5}>
      <Heading>Set dead man's switch</Heading>
      <Text>
        The dead man's switch will trigger after <em>2 years</em>. Every time
        you interact with your wallet, this timer will reset. Once the chosen
        amount of time has elapsed without any wallet activity, the switch will
        trigger and the chosen addresses will gain access to the assets in your
        wallet.
      </Text>
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
        Activate switch
      </Button>
    </Flex>
  );
}
