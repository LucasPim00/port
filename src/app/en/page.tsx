//src/app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Sidebar from '@/components/SidebarEN';
import AboutMeEN from '@/components/AboutMeEN';
import ProjectsEN from '@/components/ProjectsEN';
import HabilidadesEN from '@/components/HabilidadesEN';
import EducationEN from '@/components/EducationEN';
import ExperienceEN from '@/components/ExperienceEN';
import { aplicarTemaEN, aplicarTemaPT } from "@/utils/themeAndLanguage";

export default function Home() {
  const router = useRouter();
  const [neonCor, setNeonCor] = useState<"blue" | "red">("blue");
  const [modoColapsado, setModoColapsado] = useState(false); // esta linha foi adicionada
  const [animando, setAnimando] = useState(false); // esta linha foi adicionada

  useEffect(() => {
    document.body.classList.remove("neon-blue", "neon-red");
    document.body.classList.add(`neon-${neonCor}`);
  }, [neonCor]);

  const handleLanguageClick = (lang: "pt" | "en") => {
    if (lang === "en") {
      aplicarTemaEN();
      setNeonCor("red");
    } else {
      aplicarTemaPT();
      setNeonCor("blue");
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const element = e.currentTarget;
    const progress = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
    document.documentElement.style.setProperty('--scroll', `${progress}%`);
  };

  // esta função foi adicionada
  const alternarSidebar = () => {
    setAnimando(true); // inicia rotação
    setTimeout(() => {
      setModoColapsado((prev) => !prev); // troca layout após 700ms
      setAnimando(false); // termina animação
    }, 700);
  };

  return (
    <div className="flex h-screen overflow-hidden relative bg-gradient-to-r from-[#4b0000] via-[#ff0000] to-black text-white" style={{ perspective: '1500px' }}>
      
      {/* botão para alternar sidebar */}
      <div className="absolute top-2 left-6 cursor-pointer z-50 animate-pulse group" onClick={alternarSidebar}>
        <img
          src="/livro.png"
          alt="Toggle Menu"
          className="w-8 h-8 rounded-full shadow-[0_0_20px_#facc15] hover:scale-105 transition-transform duration-300"
        />

        {/* Tooltip com estilo neon/fumaça */}
        <span className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-yellow-300 bg-black bg-opacity-70 border border-yellow-400 rounded-md shadow-[0_0_15px_#facc15] group-hover:opacity-100 opacity-0 transition-opacity duration-300 whitespace-nowrap font-semibold tracking-wide">
          {modoColapsado ? 'Mostrar Menu' : 'Ocultar Menu'}
        </span>
      </div>      

      {/* passa os estados para o Sidebar */}
      <Sidebar modoColapsado={modoColapsado} animando={animando} /> {/* esta linha foi alterada */}

      {/* Botão de idiomas com animação ao clicar */}
      <div className="fixed top-4 right-4 z-50 cursor-pointer group">
        <div className="flex items-center gap-1 p-1 bg-white/10 rounded-full border border-red-500 transition-transform group-active:scale-90 animate-click">
          <img
            src="/brasil.jpeg"
            alt="Português"
            className="h-10 w-10 neon-border-red outline-none focus:outline-none"
            onClick={() => router.push('/')} // volta pra versão pt
            />
          <img
            src="/EUA.jpeg"
            alt="English"
            className="h-10 w-10 neon-border-red outline-none focus:outline-none"
            onClick={() => router.push('/en')}
          />
        </div>
      </div>

      {/* Linha de rolagem externa */}
      <div
        className={`scroll-bar-red transition-all duration-500 ${
            modoColapsado ? 'left-20' : 'left-60'
        }`}
        >
        <div className="scroll-bar-inner-red" />
        </div>

      {/* Conteúdo principal com rolagem */}
      <main
        className={`p-6 w-full h-screen overflow-y-auto scroll-smooth transition-all duration-500 
        ml-20 space-y-5 ${
          modoColapsado ? 'ml-20' : 'ml-60' // esta linha foi alterada para ajustar margin
        }`}
        onScroll={handleScroll}
      >
        <AboutMeEN />
        <ProjectsEN />
        <HabilidadesEN />
        <EducationEN />
        <ExperienceEN />
      </main>
    </div>
  );
}