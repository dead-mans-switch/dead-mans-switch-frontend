import { Flex } from "@chakra-ui/react";
import { useStarknetCall } from "@starknet-react/core";
import type { NextPage } from "next";
import { useMemo } from "react";
import { toBN } from "starknet/dist/utils/number";
import { ConnectButton } from "~/components/ConnectButton";
import { AliveButton } from "~/components/AliveButton";
import { IncrementCounter } from "~/components/IncrementCounter";
import { TransactionList } from "~/components/TransactionList";
import { useCounterContract } from "~/hooks/counter";

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
    <Flex as="main" direction="column" gap={10} p={5}>
      <ConnectButton />
      <AliveButton />
      <h2>Counter Contract</h2>
      <p>Address: {counter?.address}</p>
      <p>Value: {counterValue}</p>
      <IncrementCounter />
      <h2>Recent Transactions</h2>
      <TransactionList />
    </Flex>
  );
};

export default Wallet;
