import Carousel from "@/components/Carousel";
import PagesContent from "@/components/shared/PagesContent";
import ContactForm from "@/components/ParticipateForm";
import PictureContactSection from "@/components/PictureContactSection";

const title = "High Range";
const content = "Elegir Hight Range significa optar por vehículos de lujo de marcas prestigiosas como Porsche, Ferrari, Lamborghini y Maserati, garantizando calidad y exclusividad. Ofrecemos una experiencia de compra personalizada y un servicio postventa excepcional, además de la oportunidad de unirte a una comunidad de entusiastas del automóvil. En Hight Range, no solo adquieres un vehículo; vives una experiencia que combina pasión y un servicio inigualable.";

export default function Home() {
  return (
    <div className="Home bg-neutral-950">
      <Carousel />
      <PagesContent  title={title} content={content} />
      <div className="contactSection mx-auto max-xl:max-w-[700px] xl:grid xl:grid-cols-2 xl:max-w-[1200px]">
        <PictureContactSection />
        <ContactForm />
      </div>
    </div>
  );
}
