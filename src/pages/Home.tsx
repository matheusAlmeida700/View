import { useEffect, useRef, useState } from "react";
import viewLogo from "@/assets/imgs/company/view-expanded-logo.png";
import decorativeBgL from "@/assets/home/decorative-balls-l.png";
import decorativeBgR from "@/assets/home/decorative-balls-r.png";

import plantP from "@/assets/imgs/plants/loja_p.png";
import plantM from "@/assets/imgs/plants/loja_m.png";
import plantG from "@/assets/imgs/plants/loja_g.png";
import PharmacySizeSelector from "../components/PharmacySizeSelector";

function Home() {
  const [started, setStarted] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [peek, setPeek] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const hideTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (started) {
      const timer = setTimeout(() => setShowButtons(false), 700);
      return () => clearTimeout(timer);
    }
  }, [started]);

  useEffect(() => {
    function measure() {
      const el = headerRef.current;
      if (el) setHeaderHeight(el.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const TOP_THRESHOLD = Math.max(48, headerHeight || 80);

    function onMove(e: MouseEvent) {
      const y = e.clientY;
      const shouldPeek = y <= TOP_THRESHOLD;

      if (shouldPeek) {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
        setPeek(true);
      } else {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = window.setTimeout(() => {
          setPeek(false);
          hideTimeoutRef.current = null;
        }, 180);
      }
    }

    function onTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      if (touch && touch.clientY <= TOP_THRESHOLD) setPeek(true);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onTouchStart);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [headerHeight]);

  const headerVisible = !started || peek;

  return (
    <div className="home-gradient relative flex h-screen w-full flex-col">
      <header className="pt-2">
        <div
          ref={headerRef}
          className={`poppins relative z-20 flex transform items-center justify-between bg-transparent pr-37 pl-27 transition-transform duration-500 ${
            headerVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <img
            src={viewLogo}
            className={`w-24 transform transition-all duration-500 sm:w-32 md:w-36 lg:w-44 ${
              started ? "scale-75" : "scale-100"
            }`}
            alt="Logo View"
          />

          <div
            className={
              "text-gray absolute left-1/2 flex -translate-x-1/2 transform gap-16 text-[22px] transition-all duration-500 " +
              (started
                ? "pointer-events-none -translate-y-[200%] opacity-0"
                : "translate-y-0 opacity-100")
            }
          >
            <p className="cursor-pointer">Início</p>
            <p className="cursor-pointer">Pricing</p>
            <p className="cursor-pointer">Sobre Nós</p>
            <p className="cursor-pointer">Ajuda</p>
          </div>

          <div
            className={
              "flex h-16 w-16 transform items-center justify-center rounded-full border-3 border-[#4b4a49]/25 p-1 transition-all duration-500 " +
              (started ? "scale-75" : "scale-100")
            }
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500 text-3xl font-bold text-white">
              G
            </div>
          </div>
        </div>
      </header>

      <main
        className={`poppins text-gray flex w-full flex-1 flex-col items-center ${started ? "" : "overflow-hidden"}`}
      >
        <h1
          className={
            "mt-12 text-center leading-15 transition-all duration-700 " +
            (started
              ? "-translate-y-26 text-[47px] leading-none opacity-100"
              : "translate-y-0 text-[57px] opacity-100")
          }
        >
          {started ? (
            <>
              Escolha o tamanho da <br /> sua futura loja!
            </>
          ) : (
            <>
              Potencialize a Experiência <br /> do Planejamento
            </>
          )}
        </h1>

        {showButtons && (
          <div
            className={
              "mt-7 flex transform gap-5 transition-all duration-700 " +
              (started
                ? "translate-y-10 opacity-0"
                : "translate-y-0 opacity-100")
            }
          >
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
        )}

        <div className="relative flex h-full w-full justify-center">
          <img
            src={plantP}
            className="border-primary mt-25 w-4xl rounded-[50px] border-5"
            alt=""
          />
          <img
            src={plantM}
            className="border-primary absolute top-8 mt-25 w-4xl translate-x-[7px] rotate-[-5deg] rounded-[50px] border-5"
            alt=""
          />
          <img
            src={plantG}
            className="border-primary absolute top-15 mt-25 w-4xl translate-x-[20px] rotate-[-12deg] rounded-[50px] border-5"
            alt=""
          />
        </div>

        {/* PRECISO QUE AS IMAGENS AQUI DE CIMA QUE NÃO ESTÃO COMENTADAS, VÃO DE FORMA ANIMADA PARA ESSAS IMAGENS */}
        {/* <div className="relative flex h-full w-full gap-4 justify-center">
          <img
            src={plantP}
            className="border-black aspect-[5/8] w-93 rounded-[50px] border-1 object-cover object-left"
            alt=""
          />
          <img
            src={plantM}
            className="border-black aspect-[5/8] w-93 rounded-[50px] border-1 object-cover object-left"
            alt=""
          />
          <img
            src={plantG}
            className="border-black aspect-[5/8] w-93 rounded-[50px] border-1 object-cover object-left"
            alt=""
          />
        </div> */}

        <PharmacySizeSelector />
      </main>

      <img
        src={decorativeBgL}
        className="absolute bottom-5 left-10 h-full"
        alt=""
      />
      <img
        src={decorativeBgR}
        className="absolute right-10 bottom-5 h-full"
        alt=""
      />
    </div>
  );
}

export default Home;

// import React, { useEffect, useRef, useState } from "react";
// import viewLogo from "../assets/imgs/company/View-logo.png";
// import leftBall from "../assets/imgs/balls-left.png";
// import rightBall from "../assets/imgs/balls-right.png";

// import plantP from "../assets/imgs/plants/loja_p.png";
// import plantM from "../assets/imgs/plants/loja_m.png";
// import plantG from "../assets/imgs/plants/loja_g.png";
// import PharmacySizeSelector from "../components/PharmacySizeSelector";

// function Home() {
//   const [started, setStarted] = useState(false);
//   const [showButtons, setShowButtons] = useState(true);
//   const [peek, setPeek] = useState(false); // header aparece quando mouse vai pro topo
//   const headerRef = useRef<HTMLDivElement | null>(null);
//   const [headerHeight, setHeaderHeight] = useState(0);
//   const hideTimeoutRef = useRef<number | null>(null);
//   const [showSelector, setShowSelector] = useState(false);

//   const imgs = [
//     { src: plantP, alt: "plantP", baseX: 0, baseY: 0, baseRot: 0 },
//     { src: plantM, alt: "plantM", baseX: 7, baseY: -8, baseRot: -5 },
//     { src: plantG, alt: "plantG", baseX: 20, baseY: -15, baseRot: -12 },
//   ];

//   // posições alvo quando `started === true`
//   const target = [
//     {
//       x: -390,
//       y: -52,
//       rot: 0,
//       scale: 1,
//       z: 10,
//       classes:
//         "aspect-[5/8] w-93 object-cover object-left border-1 rounded-2xl",
//     },
//     {
//       x: 0,
//       y: -52,
//       rot: 0,
//       scale: 1,
//       z: 20,
//       classes: "aspect-[5/8] w-93 object-cover object-left border-1",
//     },
//     {
//       x: 390,
//       y: -68,
//       rot: 0,
//       scale: 1,
//       z: 30,
//       classes: "aspect-[5/8] w-93 object-cover object-left border-1",
//     },
//   ];
