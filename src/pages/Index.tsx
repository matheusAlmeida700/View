import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import medicineIllustration from "@/assets/home/medicine-bottle.png";
import pharmacyIllustration from "@/assets/home/pharmacy.png";
import blueprintIllustration from "@/assets/home/blueprint.png";

const Index = () => {
  return (
    <div className="poppins min-h-screen">
      <div className="section">
        <Header />
        <HeroSection />
      </div>

      <div className="section reverse">
        <FeatureSection
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          imageSrc={medicineIllustration}
          imageAlt="3D medicine illustration"
          imagePosition="left"
          ballsPosition="right"
        />
      </div>

      <div className="section">
        <FeatureSection
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          imageSrc={pharmacyIllustration}
          imageAlt="3D pharmacy building illustration"
          imagePosition="right"
          ballsPosition="left"
        />
      </div>

      <div className="section reverse">
        <FeatureSection
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
