import React, { useState } from "react";
import smallPharmacyImg from "../assets/imgs/bluePrint/loja_p.png";
import mediumPharmacyImg from "../assets/imgs/bluePrint/loja_m.png";
import largePharmacyImg from "../assets/imgs/bluePrint/loja_g.png";

const combineClasses = (
  ...classes: (string | boolean | undefined)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

interface PharmacySize {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  estimatedCost: string;
}

const pharmacySizes: PharmacySize[] = [
  {
    id: "small",
    title: "Farmácia Pequena",
    subtitle: "50-100m²",
    image: smallPharmacyImg,
    description: "Ideal para começar seu negócio com investimento menor",
    features: [
      "Medicamentos essenciais",
      "Atendimento personalizado",
      "Foco no bairro",
    ],
    estimatedCost: "R$ 50.000 - R$ 80.000",
  },
  {
    id: "medium",
    title: "Farmácia Média",
    subtitle: "100-200m²",
    image: mediumPharmacyImg,
    description: "Equilibrio perfeito entre variedade e investimento",
    features: [
      "Ampla variedade",
      "Área de consulta",
      "Produtos de conveniência",
    ],
    estimatedCost: "R$ 80.000 - R$ 150.000",
  },
  {
    id: "large",
    title: "Farmácia Grande",
    subtitle: "200m² ou mais",
    image: largePharmacyImg,
    description: "Estabelecimento completo para máximo retorno",
    features: [
      "Sortimento completo",
      "Múltiplos serviços",
      "Grande fluxo de clientes",
    ],
    estimatedCost: "R$ 150.000 - R$ 300.000",
  },
];

interface PharmacySizeSelectorProps {
  onSizeSelect?: (size: PharmacySize) => void;
}

const PharmacySizeSelector: React.FC<PharmacySizeSelectorProps> = ({
  onSizeSelect,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (size: PharmacySize) => {
    setSelectedId(size.id);
    onSizeSelect?.(size);
  };

  return (
    <div className="w-full max-w-6xl pt-0">
      <div className="flex h-[480px] gap-4">
        {pharmacySizes.map((size) => {
          const isHovered = hoveredId === size.id;
          const isSelected = selectedId === size.id;
          const isOtherHovered = hoveredId && hoveredId !== size.id;

          return (
            <div
              key={size.id}
              className={combineClasses(
                "relative cursor-pointer overflow-hidden rounded-2xl border-2 border-red-300",
                "transition-all duration-500 ease-out",
                isHovered || isSelected
                  ? "border-pharmacy-green flex-[3] shadow-[0_8px_30px_-8px_hsl(var(--pharmacy-green)/0.2)]"
                  : isOtherHovered
                    ? "flex-[0.5] opacity-60"
                    : "flex-1",
                isSelected && "ring-pharmacy-green ring-2 ring-offset-4",
              )}
              onMouseEnter={() => setHoveredId(size.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleSelect(size)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-left transition-transform duration-500"
                style={{
                  backgroundImage: `url(${size.image})`,
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <div
                  className={combineClasses(
                    "transition-all duration-500",
                    isHovered || isSelected
                      ? "translate-y-0 transform opacity-100"
                      : "translate-y-4 transform",
                  )}
                >
                  <div className="mb-4">
                    <h3 className="mb-1 text-2xl font-bold">{size.title}</h3>
                    <p className="text-pharmacy-green-light text-lg font-semibold">
                      {size.subtitle}
                    </p>
                  </div>

                  <div
                    className={combineClasses(
                      "space-y-4 transition-all duration-700 ease-out",
                      isHovered || isSelected
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "max-h-0 translate-y-6 overflow-hidden opacity-0",
                    )}
                  >
                    <p className="leading-relaxed text-gray-200">
                      {size.description}
                    </p>

                    <div className="space-y-2">
                      {size.features.map((feature, index) => (
                        <div
                          key={index}
                          className={combineClasses(
                            "flex items-center gap-2 transition-all duration-500 ease-out",
                            isHovered || isSelected
                              ? "translate-x-0 opacity-100"
                              : "translate-x-4 opacity-0",
                          )}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="bg-pharmacy-green h-2 w-2 rounded-full" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className={combineClasses(
                        "border-t border-white/20 pt-4 transition-all duration-500 ease-out",
                        isHovered || isSelected
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0",
                      )}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <p className="text-sm text-gray-400">
                        Investimento estimado:
                      </p>
                      <p className="text-pharmacy-green-light text-lg font-semibold">
                        {size.estimatedCost}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedId && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Ótima escolha! Você selecionou:{" "}
            <span className="text-pharmacy-green font-semibold">
              {pharmacySizes.find((s) => s.id === selectedId)?.title}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PharmacySizeSelector;
