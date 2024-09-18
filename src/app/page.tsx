import Carousel from "@/components/Carousel";
import WhyChoose from "@/components/WhyChoose";
import ContactForm from "@/components/ContactForm";
import PictureContactSection from "@/components/PictureContactSection";

export default function Home() {
  return (
    <div className="Home bg-neutral-950">
      <Carousel />
      <WhyChoose />
      <div className="contactSection mx-auto max-xl:max-w-[700px] xl:grid xl:grid-cols-2 xl:max-w-[1200px]">
        <PictureContactSection />
        <ContactForm />
      </div>
    </div>
  );
}
