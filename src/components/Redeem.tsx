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

export default function Redeem({}): JSX.Element {
  const [address, setAddress] = React.useState("");
  const [error, setError] = React.useState("");

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
          if (!isValid(address)) {
            setError("Invalid address");
          } else {
            setError("");
          }
        }}
      >
        Redeem
      </Button>
    </Flex>
  );
}
