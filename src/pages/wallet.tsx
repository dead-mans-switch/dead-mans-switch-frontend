import { Flex, Heading } from "@chakra-ui/react";
import { useStarknetCall } from "@starknet-react/core";
import type { NextPage } from "next";
import { useMemo } from "react";
import { toBN } from "starknet/dist/utils/number";
import { ConnectButton } from "~/components/ConnectButton";
import { AliveButton } from "~/components/AliveButton";
import { IncrementCounter } from "~/components/IncrementCounter";
import { TransactionList } from "~/components/TransactionList";
import { useCounterContract } from "~/hooks/counter";
import SetHeirForm from "~/components/SetHeirForm";

const Wallet: NextPage = () => {
  const { contract: counter } = useCounterContract();

  const { data: counterResult } = useStarknetCall({
    contract: counter,
    method: "counter",
    args: [],
  });

  const counterValue = useMemo(() => {
    if (counterResult && counterResult.length > 0) {
      const value = toBN(counterResult[0]);
      return value.toString(10);
    }
  }, [counterResult]);

  return (
    <Flex as="main" direction="column" gap={5} p={5}>
      <Heading>Showcase</Heading>
      <ConnectButton />
      <AliveButton />
      <SetHeirForm />
      <Heading>Counter Contract</Heading>
      <p>Address: {counter?.address}</p>
      <p>Value: {counterValue}</p>
      <IncrementCounter />
      <Heading>Recent Transactions</Heading>
      <TransactionList />
    </Flex>
  );
};

export default Wallet;
