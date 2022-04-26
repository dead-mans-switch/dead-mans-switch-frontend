import { useContract } from "@starknet-react/core";
import { Abi } from "starknet";

import DeadmanAbi from "~/abi/deadman.json";

export const address =
  "0x06401db351aedddbced1f2711083334ae911839cc65a682aa737302bdbecdc58";

export function useDeadmanContract() {
  return useContract({
    abi: DeadmanAbi as Abi,
    address,
  });
}
