"use client";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "900"], variable: "--font-roboto" });

export const metadata = {
  title: "Next Try",
  description: "description",
};

const RootLayout = ({ children }) => {
  console.log("from root layout");
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>{children}</body>
    </html>
  );
};

export default RootLayout;
