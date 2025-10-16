import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { userService } from "@/services/api";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Preencha email e senha!");
      return;
    }

    try {
      setLoading(true);
      const response = await userService.login(email, password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/home");
    } catch (error: any) {
      console.error("Login failed:", error);
      alert("Falha ao realizar login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalEmail) {
      alert("Informe seu e-mail!");
      return;
    }

    try {
      setModalLoading(true);
      await userService.forgotPassword(modalEmail);
      alert(
        "Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha.",
      );
      setModalEmail("");
    } catch (error: any) {
      console.error("Erro ao solicitar redefinição:", error);
      alert("Não foi possível enviar o e-mail. Tente novamente.");
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="poppins space-y-5">
      {/* Campo Email */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="text-[17px] font-medium text-gray-900"
        >
          Email
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="transition-smooth mt-1.5 flex h-13 items-center justify-center border-gray-300 bg-white pl-10 placeholder:text-[17px] focus:border-red-500 focus:ring-red-500"
          />
        </div>
      </div>

      {/* Campo Senha */}
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="text-[17px] font-medium text-gray-900"
        >
          Senha
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="transition-smooth mt-1.5 h-13 border-gray-300 bg-white pr-10 pl-10 placeholder:text-[17px] focus:border-red-500 focus:ring-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
          >
            {showPassword ? (
              <EyeOff className="transition-smooth h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="transition-smooth h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Esqueci a senha */}
      <div className="text-right">
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="text-md transition-smooth font-normal text-red-600 hover:text-red-500"
            >
              Esqueceu a senha?
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Redefinir senha</DialogTitle>
              <DialogDescription>
                Insira seu e-mail para receber o link de redefinição.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <Input
                type="email"
                placeholder="Seu e-mail cadastrado"
                value={modalEmail}
                onChange={(e) => setModalEmail(e.target.value)}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Cancelar
                  </button>
                </DialogClose>
                <button
                  type="submit"
                  disabled={modalLoading}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                >
                  {modalLoading ? "Enviando..." : "Enviar link"}
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Botão Login */}
      <button
        type="submit"
        disabled={loading}
        className="shadow-primary hover:shadow-glow h-12 w-full rounded-lg bg-[#e82f07] font-semibold text-white transition-all hover:cursor-pointer hover:bg-[#ee0000] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
};
