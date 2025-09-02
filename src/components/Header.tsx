import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import viewLogo from "@/assets/imgs/company/view-expanded-logo.png";
import { useNavigate } from "react-router-dom";

const SCROLL_THRESHOLD = 12;

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<boolean>(false);
  const reducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    reducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handle = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;

      if (reducedMotionRef.current) {
        lastRef.current = isScrolled;
        setScrolled(isScrolled);
        return;
      }

      if (isScrolled !== lastRef.current) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          lastRef.current = isScrolled;
          setScrolled(isScrolled);
          rafRef.current = null;
        });
      }
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });

    return () => {
      window.removeEventListener("scroll", handle);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header className={`header pt-2 ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="inner flex items-center justify-between">
          <img
            className="w-24 sm:w-32 md:w-36 lg:w-44"
            src={viewLogo}
            alt="View logo"
            loading="eager"
          />

          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="brand"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Entrar
            </Button>
            <Button
              variant="outline-brand"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
