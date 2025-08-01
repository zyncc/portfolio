import Navbar from "@/components/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Z3 Stack",
  description: "Next.js Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} dark antialiased`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <SmoothCursor />
          <Toaster richColors position="bottom-right" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
