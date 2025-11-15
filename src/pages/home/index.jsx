import { Contact } from "../../components/layout/contact.jsx";
import { FAQ } from "../../components/layout/faq.jsx";
import { Hero } from "../../components/layout/hero.jsx"
import { PricingCalculator } from "../../components/layout/pricing.jsx";
import { Process } from "../../components/layout/process.jsx";
import { Services } from "../../components/layout/service.jsx";
import { Testimonials } from "../../components/layout/testimonial.jsx";

export default function Home() {
    return (
        <>
            <Hero/>
             <Process/>
            <Services/>
            <PricingCalculator/>
            <Testimonials/>
            <Contact/>
            <FAQ/>
        </>
    );
}