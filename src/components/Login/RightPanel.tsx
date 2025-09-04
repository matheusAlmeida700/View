import { Building, Users } from "./Icons";
import viewLogo from "@/assets/imgs/company/white-view-logo.png";
import { LavaBackground } from "./LavaBackground";
import febrafarLogos from "../../assets/imgs/company/febrafar-logos.png";

export const RightPanel = () => {
  return (
    <div className="bg-gradient-background relative flex min-h-screen flex-col justify-between overflow-hidden text-white">
      <LavaBackground />

      <div className="relative z-10 mt-20 flex flex-col items-center justify-center gap-8 text-center lg:mt-18">
        <div className="mb-8 text-center">
          <div className="relative flex flex-col items-center">
            <div className="border-primary-foreground/30 absolute inset-0 top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 md:h-80 md:w-80 lg:h-96 lg:w-96"></div>
            <img src={viewLogo} className="w-16" alt="" />
            <div className="relative z-10 max-w-sm px-4 py-8 md:max-w-md md:px-6 md:py-10 lg:max-w-lg lg:px-8 lg:py-12">
              <h2 className="mb-4 text-lg leading-tight font-bold md:text-xl lg:mb-6 lg:text-xl">
                Quer aproveitar ao máximo os <br className="hidden sm:block" />
                <span className="text-gray-800">cursos, PBM, notícias</span> e
                ter <br className="hidden sm:block" />
                acesso às principais soluções <br className="hidden sm:block" />
                da <span className="font-extrabold">Febrafar</span>? Veja como:
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 px-4 sm:flex-row sm:gap-6 lg:gap-8">
          <div className="max-w-xs rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm lg:p-6">
            <div className="text-center">
              <div className="mx-auto w-fit rounded-lg bg-white/20 p-3">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold lg:text-lg">
                  Sou de uma rede
                </h3>
                <p className="text-xs text-white/90 lg:text-sm">
                  Fale com o seu focal do Cuidado ao Associado e solicite um
                  convite para ter acesso.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xs rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm lg:p-6">
            <div className="text-center">
              <div className="mx-auto mb-4 w-fit rounded-lg bg-white/20 p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold lg:text-lg">
                  Sou de uma loja
                </h3>
                <p className="text-xs text-white/90 lg:text-sm">
                  Entre em contato com sua rede e solicite um convite para ter
                  acesso.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={febrafarLogos} className="mt-1.5 w-4/9" />
      </div>
    </div>
  );
};
