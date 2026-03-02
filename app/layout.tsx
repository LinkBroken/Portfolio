import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./polyfills";

import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Omer | Portfolio",
  description: "Passionate Software Engineer crafting elegant solutions with code. Explore my projects, skills, and journey in the world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
    <html lang="en">

      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeProvider>
          
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
