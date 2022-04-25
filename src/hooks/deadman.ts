import { useContract } from "@starknet-react/core";
import { Abi } from "starknet";

import DeadmanAbi from "~/abi/deadman.json";

export function useDeadmanContract() {
  return useContract({
    abi: DeadmanAbi as Abi,
    address:
      "0x0648739d3f478258fa6a2d0032ad97c951bff74020f2816b7bd0799eef2f9436",
  });
}
