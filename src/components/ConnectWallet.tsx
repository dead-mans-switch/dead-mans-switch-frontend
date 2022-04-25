import { Button, Text } from "@chakra-ui/react";
import { useStarknet, InjectedConnector } from "@starknet-react/core";

import truncateAddress from "~/lib/truncateAddress";

export function ConnectWallet() {
  const { account, connect } = useStarknet();

  if (account) {
    return <Text>{truncateAddress(account)}</Text>;
  }

  return (
    <Button onClick={() => connect(new InjectedConnector())}>Connect</Button>
  );
}
