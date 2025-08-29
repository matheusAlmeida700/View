import decorativeBgL from "@/assets/home/decorative-balls-l.png";
import decorativeBgR from "@/assets/home/decorative-balls-r.png";

interface FeatureSectionProps {
  title?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  ballsPosition: "left" | "right";
}

const FeatureSection = ({
  title = "Bring some aura to your Design",
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  ballsPosition,
}: FeatureSectionProps) => {
  return (
    <section className="relative z-10 w-full px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {ballsPosition === "left" && (
            <img
              className="pointer-events-none absolute bottom-10 left-6 z-40 hidden max-w-[180px] md:block md:max-w-[220px]"
              src={decorativeBgL}
              alt="Decorative"
              loading="lazy"
            />
          )}

          {ballsPosition === "right" && (
            <img
              className="pointer-events-none absolute right-10 bottom-10 z-40 hidden max-w-[180px] md:block md:max-w-[220px]"
              src={decorativeBgR}
              alt="Decorative"
              loading="lazy"
            />
          )}

          {imagePosition === "left" && (
            <div className="flex justify-center md:justify-start">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
                loading="lazy"
              />
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-dark text-3xl leading-tight font-bold md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="text-muted-custom text-base leading-relaxed md:text-lg">
              {description}
            </p>
          </div>

          {imagePosition === "right" && (
            <div className="flex justify-center md:justify-end">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
