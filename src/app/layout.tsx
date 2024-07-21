import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie entertainment",
  description: "Website for movies and tv-series",
};

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkNight font-outfit">{children}</body>
    </html>
  );
}
