import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        <div className="app-layout">

          <Header />

          <main className="main-content">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
