import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highlights SFU Surge Take Home Challenge",
  description: "A Next.js application for displaying highlights from SFU's Surge Take Home Challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
