import Image from "next/image";
import HeroSection from "./components/Hero-section";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
    </div>
  );
}
