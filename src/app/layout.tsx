import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODE-ZERO | Nautical Fashion & Sailing Lifestyle",
  description: "Premium nautical fashion brand. Sailing-inspired clothing for men and women. Born on the water, made for life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
