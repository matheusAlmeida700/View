import { LoginForm } from "@/components/Login/LoginForm";
import { RightPanel } from "@/components/Login/RightPanel";
import febrafarLogo from "@/assets/imgs/company/febrafar-logo-official.png";
import viewLogo from "@/assets/imgs/company/view-expanded-logo.png";

const Login = () => {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-9">
      <div className="lg:col-span-4">
      <div className="flex flex-col mt-12 justify-center  sm:px-6 lg:px-0 xl:px-0 bg-white">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center mb-12">
            <img 
              src={viewLogo} 
              alt="Febrafar" 
              className="h-12 w-auto"
            />
          </div>

          <div className="mb-8 mt-16">
            <h1 className="text-md font-bold text-gray-900">
              Faça seu login e acesse agora!
            </h1>
          </div>

          <LoginForm />


          <div className="pt-6 mt-6 flex justify-between items-center gap-4 border-t-2 border-gray-200">
            <button className="flex-1 shadow-md hover:bg-gray-100 text-red-600 border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ">
              Consultar View PBM
            </button>
            <button className="flex-1 shadow-md hover:bg-gray-100 text-red-600 border-2 border-gray-100 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ">
              Notícias Febrafar
            </button>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-full flex justify-center">
               <img src={febrafarLogo} alt="" className="w-1/3" />
               </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="hidden lg:block lg:col-span-5">
        <RightPanel />
      </div>
    </div>
  );
};

export default Login;