"use client";

import { config } from "@/providers/web3-provider";
import { getBalance } from "wagmi/actions";

export const getTokenBalance = async (
  address: string,
  tokenCntractAddress: string
) => {
  return await getBalance(config, {
    address: address as `0x${string}`,
    token: tokenCntractAddress as `0x${string}`,
  });
};
