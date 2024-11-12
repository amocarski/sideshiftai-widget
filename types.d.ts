export type Coin = {
  networks: string[];
  coin: string;
  name: string;
  hasMemo: boolean;
  fixedOnly: boolean;
  variableOnly: boolean | string[];
  tokenDetails?: {
    [network: string]: TokenDetails;
  };
  depositOffline: boolean;
  settleOffline: boolean;
  mainnet?: string;
};
