import { Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Fullstack AirBnb Clone",
  description:
    "A fullstack project attempting to create a Airbnb clone using Nextjs 13"
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
