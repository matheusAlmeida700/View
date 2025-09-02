import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock, Eye, EyeOff } from "./Icons";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/home");
    console.log("Login attempted with:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-900">
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
            className="transition-smooth h-12 border-gray-300 bg-white pl-10 focus:border-red-500 focus:ring-red-500"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-900">
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
            className="transition-smooth h-12 border-gray-300 bg-white pr-10 pl-10 focus:border-red-500 focus:ring-red-500"
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

      <div className="text-right">
        <a
          href="#"
          className="transition-smooth text-sm font-medium text-red-600 hover:text-red-500"
        >
          Esqueceu a senha?
        </a>
      </div>

      <Button
        type="submit"
        variant="brand"
        className="shadow-primary hover:shadow-glow h-12 w-full font-semibold text-white transition-all hover:bg-[#ee0000]"
      >
        Entrar
      </Button>
    </form>
  );
};
