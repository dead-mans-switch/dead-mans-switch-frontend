import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import truncateAddress from "~/lib/truncateAddress";

// TODO: don't hardcode goerli

interface AddressProps {
  address: string;
  link?: boolean;
}

export default function Address({
  address,
  link = true,
}: AddressProps): JSX.Element {
  if (link) {
    return (
      <NextLink
        href={`https://goerli.voyager.online/contract/${address}`}
        passHref
      >
        <Link color="gray.50" target="_blank">
          {truncateAddress(address)}
        </Link>
      </NextLink>
    );
  }

  return <Text>{truncateAddress(address)}</Text>;
}
