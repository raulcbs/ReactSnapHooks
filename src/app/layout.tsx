import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Snap Hooks",
  description: "React hooks library open source",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
