import { ConnectKitButton } from "connectkit";
import { Button } from "../ui/button";
import { Unplug } from "lucide-react";

type WalletButtonProps = {
  disconnect?: boolean;
};

const WalletButton = ({ disconnect }: WalletButtonProps) => {
  return (
    <ConnectKitButton.Custom>
      {({ show }) => {
        return (
          <Button size="sm" variant="outline" onClick={show}>
            {!disconnect ? "Connect Wallet" : <Unplug />}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default WalletButton;
