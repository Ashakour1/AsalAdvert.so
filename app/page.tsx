import Image from "next/image";
import HeroSection from "./components/Hero-section";
import About from "./components/About";
import Services from "./components/Services-section";
import Portfolio from "./components/Portfolio-section";
import CompanySnapshot from "./components/Company-snapshot-section";
import Testimonials from "./components/Testimonials-section";
import Customers from "./components/Customers-section";
import CallToAction from "./components/Cta-section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <CompanySnapshot />
      <Testimonials />
      <Customers />
      <Footer/>
    </div>
  );
}
