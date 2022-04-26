import { useContract } from "@starknet-react/core";
import { Abi } from "starknet";

import DeadmanAbi from "~/abi/deadman.json";

export const address =
  "0x07fd50e5c31a3c123a124021359c46084947e924cf00378c6c79bde75f36e84e";

export function useDeadmanContract() {
  return useContract({
    abi: DeadmanAbi as Abi,
    address,
  });
}
