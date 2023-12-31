import "./globals.css";
import { Inter } from "next/font/google";
import Navbars from "@/components/Navbars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ENGINEERNEST",
  description:
    "Get ready to bring together brilliant Software engineers and ambitious startups. We provide a platform to build the future, one collaboration at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbars />
        {children}
      </body>
    </html>
  );
}
