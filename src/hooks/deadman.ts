import { useContract } from "@starknet-react/core";
import { Abi } from "starknet";

import DeadmanAbi from "~/abi/deadman.json";

export function useDeadmanContract() {
  return useContract({
    abi: DeadmanAbi as Abi,
    address:
      "0x021ad88d4e09feee94541e75151b5a085bf052eb62563d36e8349751455a74c0",
  });
}
