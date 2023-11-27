import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Watson - Software Engineer",
  description: "Portfolio/personal website of Kyle Watson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
