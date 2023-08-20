import { CIA } from "@/components/CIA";
import { CIABox } from "@/components/CIABox";
import Copyright from "@/components/Copyright";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { OurTeam } from "@/components/OurTeam";
import { OurVision } from "@/components/OurVision";
import { Parther } from "@/components/Parther";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center px-5 md:px-0  ">
      <HeroSection />
      <Parther />
      <OurVision />
      <CIA />
      <CIABox />
      <FAQ />
      <Footer />
      <Copyright />
    </main>
  );
}
