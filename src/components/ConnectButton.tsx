import { Button } from "@chakra-ui/react";
import { useStarknet, InjectedConnector } from "@starknet-react/core";

import Address from "~/components/Address";

export function ConnectButton() {
  const { account, connect } = useStarknet();

  if (account) {
    return <Address address={account} />;
  }

  return (
    <Button onClick={() => connect(new InjectedConnector())}>Connect</Button>
  );
}
