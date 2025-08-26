import viewLogo from "../assets/imgs/company/View-logo.png";
import leftBall from "../assets/imgs/balls-left.png";
import rightBall from "../assets/imgs/balls-right.png";

function Home() {
  return (
    <div className="home-gradient relative h-screen w-full">
      <header className="poppins relative flex h-43 items-center justify-between pr-37 pl-27">
        <img src={viewLogo} className="h-21" alt="Logo View" />
        <div className="text-gray absolute left-1/2 flex -translate-x-1/2 gap-16 text-[22px]">
          <p>Features</p>
          <p>Pricing</p>
          <p>About Us</p>
          <p>Support</p>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-[#4b4a49]/25 p-1">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500 text-3xl font-bold text-white">
            G
          </div>
        </div>
      </header>

      <main className="poppins text-gray flex w-full flex-col items-center">
        <h1 className="mt-12 text-center text-[57px] leading-15">
          Potencialize a Experiência <br /> do Planejamento
        </h1>
        <div className="mt-7 flex gap-5">
          <button className="bg-primary rounded-3xl px-12 py-4.5 text-xl text-white">
            COMEÇAR
          </button>
          <button className="border-primary text-primary rounded-3xl border-4 px-5 text-xl font-bold">
            TOUR PELO SITE
          </button>
        </div>
      </main>

      <img src={leftBall} className="absolute bottom-5 left-10" alt="" />
      <img src={rightBall} className="absolute bottom-5 right-10" alt="" />
    </div>
  );
}

export default Home;
