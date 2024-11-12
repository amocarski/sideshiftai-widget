import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Web3Provider } from "@/providers/web3-provider";

const gtPressuraMono = localFont({
  src: [
    {
      path: "./fonts/GT Pressura/GT-Pressura-Mono-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/GT Pressura/GT-Pressura-Mono-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/GT Pressura/GT-Pressura-Mono-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-family-text",
  display: "swap",
});

const vectrex = localFont({
  src: "./fonts/Vectrex/VectrexWeb-Bold.woff2",
  variable: "--font-family-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sideshift demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gtPressuraMono.variable} ${vectrex.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Web3Provider>{children}</Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
