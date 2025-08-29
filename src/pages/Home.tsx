import viewLogo from "../assets/imgs/company/view-logo.png";
import decorativeBgL from "../assets/home/decorative-balls-l.png";
import decorativeBgR from "../assets/home/decorative-balls-r.png";

import plantP from "../assets/imgs/plants/loja_p.png";
import plantM from "../assets/imgs/plants/loja_m.png";
import plantG from "../assets/imgs/plants/loja_g.png";

function Home() {
  return (
    <div className="home-gradient poppins relative flex h-screen w-full flex-col overflow-hidden">
      <header className="relative flex h-43 items-center justify-between pr-37 pl-27">
        <img src={viewLogo} className="h-21" alt="Logo View" />
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

      <main className="text-dark flex w-full flex-1 flex-col items-center overflow-hidden font-semibold">
        <h1 className="mt-12 text-center text-[57px] leading-15">
          Potencialize a Experiência <br /> do Planejamento
        </h1>
        <div className="mt-7 flex gap-5">
          <button className="bg-primary cursor-pointer rounded-3xl px-12 py-4.5 text-xl text-white">
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

        {/* <img
          src={plantP}
          className="border-primary mt-25 w-4xl rounded-[50px] border-5"
          alt=""
        />

        <img
          src={plantM}
          className="border-primary absolute bottom-[-160px] mt-25 w-4xl translate-x-[7px] rotate-[-5deg] rounded-[50px] border-5"
          alt=""
        />

        <img
          src={plantM}
          className="border-primary absolute top-115 mt-25 w-4xl translate-x-[7px] rotate-[-5deg] rounded-[50px] border-5"
          alt=""
        />

        <img
          src={plantG}
          className="border-primary absolute bottom-[-220px] mt-25 w-4xl translate-x-[20px] rotate-[-12deg] rounded-[50px] border-5"
          alt=""
        />

        <img
          src={plantG}
          className="border-primary absolute top-122 mt-25 w-4xl translate-x-[20px] rotate-[-12deg] rounded-[50px] border-5"
          alt=""
        /> */}
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
