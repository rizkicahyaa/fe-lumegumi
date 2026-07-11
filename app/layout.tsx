import type { Metadata } from "next";
import { lilitaOne, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lume Gumi",
  description: "Lume Gumi – Game Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${lilitaOne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}
