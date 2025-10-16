import viewLogo from "@/assets/imgs/company/View-logo.png";
import decorativeBgL from "@/assets/home/decorative-balls-l.png";
import decorativeBgR from "@/assets/home/decorative-balls-r.png";

import plantP from "@/assets/imgs/plants/loja_p.png";
import plantM from "@/assets/imgs/plants/loja_m.png";
import plantG from "@/assets/imgs/plants/loja_g.png";

import { useEffect, useState } from "react";

import BackButton from "../components/ui/backButton";
import PharmacySizeSelector from "@/components/PharmacySizeSelector";

function Home() {
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    console.log("Started state:", started);
  }, [started]);

  return (
    <div className="home-gradient relative flex h-screen w-full flex-col overflow-hidden">
      {started ? (
        <>
          {/* <header className="bg-red-600 flex items-center justify-center px-30 pt-3">
            <BackButton onClick={() => setStarted(false)} />

            <h1 className="poppins text-gray text-center text-[47px] leading-12">
              Escolha o tamanho da <br /> sua futura loja
            </h1>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border-3 border-[#4b4a49]/25 p-1">
              <div className="flex poppins h-full w-full items-center justify-center rounded-full bg-red-500 text-2xl font-bold text-white">
                G
              </div>
            </div>
          </header> */}

          <header className="home-header poppins relative flex items-center justify-between pr-37 pl-27">
            <BackButton onClick={() => setStarted(false)} />

            <h1 className="poppins text-gray mt-10 text-center text-4xl">
              Escolha o tamanho da <br /> sua futura loja
            </h1>

            <div className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-[#4b4a49]/25 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500 text-3xl font-bold text-white">
                G
              </div>
            </div>
          </header>

          <main className="poppins text-gray z-50 flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
            <PharmacySizeSelector />
          </main>
        </>
      ) : (
        <>
          <header className="home-header poppins relative flex h-43 items-center justify-between pr-37 pl-27">
            <img src={viewLogo} className="h-19" alt="Logo View" />
            <div className="text-gray absolute left-1/2 flex -translate-x-1/2 gap-16 text-[22px]">
              <p className="cursor-pointer">Início</p>
              <p className="cursor-pointer">Pricing</p>
              <p className="cursor-pointer">Sobre Nós</p>
              <p className="cursor-pointer">Ajuda</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-[#4b4a49]/25 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500 text-3xl font-bold text-white">
                G
              </div>
            </div>
          </header>

          <main className="poppins text-gray flex w-full flex-1 flex-col items-center overflow-hidden">
            <h1 className="mt-12 text-center text-[57px] leading-15">
              Potencialize a Experiência <br /> do Planejamento
            </h1>
            <div className="mt-7 flex gap-5">
              <button
                onClick={() => setStarted(true)}
                className="bg-primary cursor-pointer rounded-3xl px-12 py-4.5 text-xl text-white"
              >
                COMEÇAR
              </button>
              <button className="text-primary cursor-pointer rounded-3xl border-4 px-5 text-xl font-bold">
                TOUR PELO SITE
              </button>
            </div>

            <div className="relative flex h-full w-full justify-center">
              <img
                src={plantP}
                className="border-primary mt-25 w-4xl rounded-[50px] border-5"
                alt="Plant P Image"
              />

              <img
                src={plantM}
                className="border-primary absolute top-8 mt-25 w-4xl translate-x-[7px] rotate-[-5deg] rounded-[50px] border-5"
                alt="Plant M Image"
              />

              <img
                src={plantG}
                className="border-primary absolute top-15 mt-25 w-4xl translate-x-[20px] rotate-[-12deg] rounded-[50px] border-5"
                alt="Plant G Image"
              />
            </div>
          </main>
        </>
      )}

      <img
        src={decorativeBgL}
        className="absolute bottom-5 left-10 h-full"
        alt="Decorative Background"
      />
      <img
        src={decorativeBgR}
        className="absolute right-10 bottom-5 h-full"
        alt="Decorative Background"
      />
    </div>
  );
}

export default Home;
