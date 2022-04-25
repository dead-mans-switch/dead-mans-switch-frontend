import { Button, Link } from "@chakra-ui/react";
import { useStarknet, InjectedConnector } from "@starknet-react/core";
import NextLink from "next/link";

import truncateAddress from "~/lib/truncateAddress";

// TODO: don't hardcode goerli

export function ConnectButton() {
  const { account, connect } = useStarknet();

  if (account) {
    return (
      <NextLink
        href={`https://goerli.voyager.online/contract/${account}`}
        passHref
      >
        <Link textAlign="center" color="gray.50" target="_blank">
          {truncateAddress(account)}
        </Link>
      </NextLink>
    );
  }

  return (
    <Button onClick={() => connect(new InjectedConnector())}>Connect</Button>
  );
}
