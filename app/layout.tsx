import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escavana",
  description: "Feel at home, away from ",
  keywords: "Next.js, Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="max-w-6xl mx-auto mt-4">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
