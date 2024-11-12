import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <input
          type={type}
          className={cn(
            "font-text border-new-black dark:border-flashbang-white bg-flashbang-white dark:bg-input dark:focus-visible:shadow-outline-white focus-visible:shadow-outline-new-black dark:focus-visible:border-flashbang-white focus-visible:border-new-black dark:invalid:border-punk-red invalid:border-punk-red input-text block h-20 w-full rounded-md border border-b-[6px] px-6 text-lg focus-visible:outline-none disabled:hover:cursor-not-allowed sm:text-xl pl-[5.5rem] transition text-left font-light"
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute left-6 top-[0.875rem] z-50 h-12 w-12">
          <svg
            width="48"
            height="48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:text-flashbang-white text-new-black"
          >
            <path
              d="M11.2 18.34a4.2 4.2 0 0 1 1.23-2.97l3.14-3.14A4.2 4.2 0 0 1 18.54 11h4.92a4.2 4.2 0 0 1 2.97 1.23l3.14 3.14a4.2 4.2 0 0 1 1.23 2.97v4.92a4.2 4.2 0 0 1-1.23 2.97l-3.14 3.14a4.2 4.2 0 0 1-2.97 1.23h-4.92a4.2 4.2 0 0 1-2.97-1.23l-3.14-3.14a4.2 4.2 0 0 1-1.23-2.97v-4.92Z"
              stroke="currentColor"
              stroke-width="1.5"
              data-darkreader-inline-stroke=""
            ></path>
            <path
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              d="m27.861 28 9.939 9.939"
              data-darkreader-inline-stroke=""
            ></path>
          </svg>
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
