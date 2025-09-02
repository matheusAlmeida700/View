import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/home/pharmacy.webp";
import decorativeBgL from "@/assets/home/decorative-balls-l.png";
import decorativeBgR from "@/assets/home/decorative-balls-r.png";
import StatsSection from "./StatsSection";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto grid min-h-screen w-full max-w-7xl px-6 pt-28 md:pt-16 lg:pt-24">
      <div className="grid items-center lg:grid-cols-2">
        <img
          className="absolute bottom-10 left-10"
          src={decorativeBgL}
          alt="Decorative Background"
        />
        <img
          className="absolute right-10 bottom-10"
          src={decorativeBgR}
          alt="Decorative Background"
        />

        <div className="z-10 mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-dark text-4xl leading-tight font-bold lg:text-7xl">
              Bring some aura
              <br />
              to your Design
            </h1>
            <p className="text-muted-custom text-lg leading-relaxed md:text-2xl">
              Try these simple tricks to made your boring
              <br />
              design look awesome
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="brand"
              size="xl"
              onClick={() => navigate("/login")}
            >
              Começar Agora
            </Button>
            <Button
              variant="outline-brand"
              size="xl"
              onClick={() => navigate("/login")}
            >
              Saiba mais
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroBuilding}
            alt="3D isometric building illustration"
            className="h-auto w-full max-w-7xl object-contain"
          />
        </div>
      </div>
      <StatsSection />
    </section>
  );
};

export default HeroSection;
