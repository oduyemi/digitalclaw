import { Blog } from "@/components/Blog";
import { CTA } from "@/components/CTA";
import { CaseStudies } from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { OurWork } from "@/components/OurWork";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Trust } from "@/components/Trust";
import Update from "@/components/Update";



export default function Page() {
  return (
    <div className="Home">
      <Hero />
      <Trust />
      <div id="services">
        <Services />
      </div>
      <Process />
      <CaseStudies />
      <div id="work">
        <OurWork />
      </div>
      <Testimonials />
      <div id="faq">
        <Faq />
      </div>
      <Update />
      <Blog />
      <CTA />
    </div>
  );
}