import { ExcuseGenerator } from "../components/excuse-generator";
import { FinalCta } from "../components/final-cta";
import { HeroSection } from "../components/hero-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ScrollReveal } from "../components/scroll-reveal";
import { StepsSection } from "../components/steps-section";
import { Testimonials } from "../components/testimonials";
import { UtilityToolkit } from "../components/utility-toolkit";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3efe9] text-[#1f1c2d]">
      <SiteHeader />
      <main>
        <ScrollReveal><HeroSection /></ScrollReveal>
        <ScrollReveal><ExcuseGenerator /></ScrollReveal>
        <ScrollReveal><StepsSection /></ScrollReveal>
        <ScrollReveal><UtilityToolkit /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><FinalCta /></ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
}
