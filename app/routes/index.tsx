import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

function Logo() {
  return <Text>Logo</Text>;
}

function Navbar() {
  return (
    <Flex as="nav" justify="space-between">
      <Logo />
      <Button>Connect Wallet</Button>
    </Flex>
  );
}

export default function Index() {
  return (
    <>
      <Box as="header">
        <Navbar />
        <Logo />
        <Heading>Dead Man's Switch</Heading>
        <Text>
          Ensure that your loved ones get access to your assets in case of your
          death.
        </Text>
        <Button>Set dead man's switch</Button>
      </Box>
      <Box as="main">
        <Heading>What's Dead Man's Switch?</Heading>
        <Text>
          Dead Man's Switch allows trusted accounts to access the assets in your
          wallet in case your wallet has not been used for a long period of
          time. You decide who gets your inheritance and how much much time has
          to elapse before the dead man's switch triggers.
        </Text>
      </Box>
    </>
  );
}
