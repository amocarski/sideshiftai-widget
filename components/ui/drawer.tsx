import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Drawer = ({
  open,
  onClose,
  children,
  className,
  title,
}: DrawerProps) => {
  return (
    <div
      className={cn(
        "absolute z-50 right-0 top-0 h-full bg-black border-l shadow-lg transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "translate-x-full",
        className
      )}
    >
      <div className="flex flex-row items-center justify-between gap-4">
        {title && <h2 className="font-display text-xl">{title}</h2>}
        <button
          onClick={onClose}
          className="rounded-sm text-smoke ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <ChevronRight size={29} />
          <span className="sr-only">Close</span>
        </button>
      </div>
      {children}
    </div>
  );
};
