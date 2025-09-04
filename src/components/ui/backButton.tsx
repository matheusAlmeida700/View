import { CircleArrowLeft, MoveLeft } from "lucide-react";

type BackButtonProps = {
  onClick?: () => void;
};

const backButton = ({ onClick }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative h-10 w-40 cursor-pointer rounded-4xl bg-red-500 text-center text-xl font-semibold text-black"
      type="button"
    >
      <div className="absolute top-[4px] left-1 z-10 flex h-8 w-1/5 items-center justify-center rounded-3xl bg-white text-red-500 duration-500 group-hover:w-[151px] group-hover:bg-red-50 group-hover:text-red-500">
        {/* Ícone normal */}
        <CircleArrowLeft className="h-full w-full opacity-100 transition-opacity duration-300 group-hover:opacity-0" />

        {/* Ícone no hover */}
        <MoveLeft className="absolute h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <p className="poppins translate-x-2 text-white">VOLTAR</p>
    </button>
  );
};

export default backButton;
