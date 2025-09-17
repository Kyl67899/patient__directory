import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Patient Directory",
  description: "Patient Directory App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Analytics />
        <Navbar />
        {/* <div className="min-h-screen bg-muted/20"> */}
          <section className="max-w-7xl mx-auto p-6">{children}</section>
        {/* </div> */}
      </body>
    </html>
  );
}

