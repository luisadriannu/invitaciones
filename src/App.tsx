import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitation from "@/views/Invitation.tsx";
import Home from "@/views/Home.tsx";
import { useEffect, useState } from "react";
import gifDesktop from "@/assets/pictures/no-desktop.gif";

function MobileOnly({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1020] text-white text-center px-6">
        <p className="text-xl">
          Para una mejor experiencia, por favor accede desde un dispositivo
          móvil. ¡Gracias!
        </p>
        <img className="w-lg" src={gifDesktop} alt="No computadoras" />
      </div>
    );
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:tipo/:slug" element={<MobileOnly><Invitation /></MobileOnly>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
