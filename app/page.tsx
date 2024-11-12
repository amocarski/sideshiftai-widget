import CoinList from "@/components/coin-list";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default async function Home() {
  const CoinListComponent: JSX.Element = await CoinList();

  return (
    <main className="fixed inset-0 z-30 flex items-center justify-center p-0">
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You Send</DialogTitle>
          </DialogHeader>
          {CoinListComponent}
        </DialogContent>
      </Dialog>
    </main>
  );
}
