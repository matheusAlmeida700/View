import { LoginForm } from "@/components/Login/LoginForm";
import { RightPanel } from "@/components/Login/RightPanel";
import febrafarLogo from "@/assets/imgs/company/febrafar-logo-official.png";
import viewLogo from "@/assets/imgs/company/View-logo.png";

const Login = () => {
  return (
    <div className="poppins min-h-screen lg:grid lg:grid-cols-9">
      <div className="lg:col-span-4">
        <div className="mt-12 flex flex-col justify-center bg-white px-6 lg:px-0 xl:px-0">
          <div className="mx-auto w-full lg:w-4/6">
            <div className="mb-12 flex items-center">
              <img src={viewLogo} alt="Febrafar" className="h-12 w-auto" />
            </div>

            <div className="mt-12 mb-12">
              <h1 className="text-[17px] font-medium text-gray-900">
                Faça seu login e acesse agora!
              </h1>
            </div>

            <LoginForm />

            <div className="mt-5 flex items-center justify-between gap-4 border-t-1 border-gray-200 pt-5">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://orion.febrafar.com.br/medicamentos")
                }
                className="flex-1 rounded-lg border-2 border-gray-100 px-4 py-3 text-sm font-medium text-red-600 shadow-sm transition-all duration-200 hover:cursor-pointer hover:bg-gray-100"
              >
                Consultar View PBM
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://orion.febrafar.com.br/noticias")
                }
                className="flex-1 rounded-lg border-2 border-gray-100 px-4 py-3 text-sm font-medium text-red-600 shadow-sm transition-all duration-200 hover:cursor-pointer hover:bg-gray-100"
              >
                Notícias Febrafar
              </button>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex w-full justify-center">
                  <img src={febrafarLogo} alt="" className="w-3/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:col-span-5 lg:block">
        <RightPanel />
      </div>
    </div>
  );
};

export default Login;
