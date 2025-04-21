import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poetsen_One } from "next/font/google";

import "./styles/globals.css";
import { Bounce, ToastContainer } from "react-toastify";

const poetsenOne = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poetsen-one",
});



export const metadata: Metadata = {
  title: "Omer Portfolio",
  description: "Passionate frontend developer",
};

// export const fetchCache = "force-no-store"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poetsenOne.variable}  antialiased`}>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
