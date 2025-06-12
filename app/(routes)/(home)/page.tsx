// import { ToastSimple } from "../../../components/ui/toast-simple";

import { FAQItem, sliderItem } from "@/constans";
import Hero from "../_components/Hero";
import FAQ from "../_components/FAQ";
import About from "../_components/About";
import GalleryDemo from "../_components/GalleryDemo";

export default function Home() {


  return (
    <>
      <Hero slider={sliderItem} />
      {/* <ToastSimple /> */}
      <About />
      <GalleryDemo />
      <FAQ FAQS={FAQItem} />
    </>

  );
}
