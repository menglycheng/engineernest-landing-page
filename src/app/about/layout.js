import { Inter } from "next/font/google";
import Navbars from "@/components/Navbars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About",
  description:
    "Get ready to bring together brilliant Software engineers and ambitious startups. We provide a platform to build the future, one collaboration at a time.",
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen">
        <p>hello</p>
        {children}
      </body>
    </html>
  );
}
