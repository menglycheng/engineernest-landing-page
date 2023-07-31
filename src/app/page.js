import { HeroSection } from "@/components/HeroSection";
import { Parther } from "@/components/Parther";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen flex flex-col justify-center items-center">
      <HeroSection />
      <Parther />
    </main>
  );
}
