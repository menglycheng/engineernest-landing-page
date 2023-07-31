import { CIA } from "@/components/CIA";
import { CIABox } from "@/components/CIABox";
import { HeroSection } from "@/components/HeroSection";
import { OurTeam } from "@/components/OurTeam";
import { OurVision } from "@/components/OurVision";
import { Parther } from "@/components/Parther";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <HeroSection />
      <Parther />
      <OurVision />
      <CIA />
      <CIABox />
      <OurTeam />
    </main>
  );
}
