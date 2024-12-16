import type { Metadata } from "next";
import { Big_Shoulders_Display, Outfit } from "next/font/google";
import "./globals.css";

const bigShouldersDisplay = Big_Shoulders_Display({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShouldersDisplay.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
