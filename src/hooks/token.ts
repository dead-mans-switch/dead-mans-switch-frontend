import { useContract } from "@starknet-react/core";
import { Abi } from "starknet";

import TokenAbi from "~/abi/token.json";

export function useTokenContract() {
  return useContract({
    abi: TokenAbi as Abi,
    address:
      "0x029260ce936efafa6d0042bc59757a653e3f992b97960c1c4f8ccd63b7a90136",
  });
}
