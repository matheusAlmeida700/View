import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import medicineIllustration from "@/assets/home/medicine-bottle.png";
import pharmacyIllustration from "@/assets/home/pharmacy.png";
import blueprintIllustration from "@/assets/home/blueprint.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="section">
        <Header />
        <HeroSection />
      </div>

      <div className="section reverse">
        <FeatureSection
          title="Gestão inteligente do seu espaço"
          description="Visualize, organize e otimize o layout da farmácia com plantas 2D e 3D. Tenha controle total sobre categorias, universos e planogramas de forma simples e profissional."
          imageSrc={medicineIllustration}
          imageAlt="3D medicine illustration"
          imagePosition="left"
          ballsPosition="right"
        />
      </div>

      <div className="section">
        <FeatureSection
          title="Painel central de farmácias"
          description="Salve, acesse e personalize várias farmácias em um único painel. Todas as suas informações ficam organizadas em um workspace moderno e responsivo."
          imageSrc={pharmacyIllustration}
          imageAlt="3D pharmacy building illustration"
          imagePosition="right"
          ballsPosition="left"
        />
      </div>

      <div className="section reverse">
        <FeatureSection
          title="Planejamento sem limites"
          description="Defina dimensões, universos e categorias com exatidão. O sistema garante fluidez, responsividade e design empresarial de alto nível."
          imageSrc={blueprintIllustration}
          imageAlt="3D blueprint illustration"
          imagePosition="left"
          ballsPosition="right"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
