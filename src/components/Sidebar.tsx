//src/components/Sidebar.tsx
'use client';

import { FaUser, FaGamepad, FaTools, FaGraduationCap, FaBriefcase, FaBookOpen, FaGalacticRepublic } from 'react-icons/fa';
import { FaBookAtlas, FaGaugeSimple } from 'react-icons/fa6';
import Image from 'next/image';

const menuItems = [
  { key: 'Sobre Mim', icon: <FaUser />, href: '#sobre' },
  { key: 'Projetos Front', icon: <FaGamepad />, href: '#projetos' },
  { key: 'Projetos Back', icon: <FaGaugeSimple />, href: '#projetosB' },
  { key: 'Projetos FullStack', icon: <FaGalacticRepublic />, href: '#projetosF' },
  { key: 'Habilidade', icon: <FaTools />, href: '#habilidades' },
  { key: 'Educação', icon: <FaGraduationCap />, href: '#educacao' },
  { key: 'Experiência', icon: <FaBriefcase />, href: '#experience' },
];

interface SidebarProps {
  modoColapsado: boolean; 
  animando: boolean;      
}

export default function Sidebar({ modoColapsado, animando }: SidebarProps) {
  return (
    <aside
      className={`h-screen bg-black text-gray-400 flex flex-col items-center py-8 fixed left-0 top-0 
        transition-transform duration-700 origin-left z-40
        ${animando ? '[transform:rotateY(-90deg)]' : '[transform:rotateY(0deg)]'}
        ${modoColapsado ? 'w-20' : 'w-60'}
      `}
      style={{ transformStyle: 'preserve-3d' }} 
    >
      {/* avatar e nome só aparecem quando NÃO está colapsado */}
      {!modoColapsado && (
        <>
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-300 mb-8">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={96}
              height={96}
              className="w-44 h-44 mb-4 avatar-neon mt-4 ml-3"
            />
          </div>

          <h1 className="px-8 text-lg hover:text-cyan-300 transition-colors cursor-crosshair text-center text-white relative -mt-4 pb-1 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:border-b-4 after:border-blue after:rounded-full after:shadow-[0_0_10px_blue]">
            🤖 LUCAS PIM 🤖
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-[2px] bg-cyan-400 shadow-[0_0_6px_2px_rgba(0,255,255,0.8)] rounded-full"></span>
          </h1>
        </>
      )}

      {/* Menu */}
      <nav className={`mt-6 flex flex-col ${
          modoColapsado ? 'gap-6' : 'gap-6 items-start'
          } w-full px-3 py-1`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center gap-3 hover:text-cyan-200 transition-colors cursor-pointer 
              ${modoColapsado ? 'justify-center' : ''}
            `}
            title={modoColapsado ? item.key : undefined}
          >
            <span className="text-lg">{item.icon}</span>
            {!modoColapsado && <span className="text-base font-medium pl-2">{item.key}</span>}
          </a>
        ))}
      </nav>

      {/* Ícones de redes sociais (exibidos somente no modo colapsado) */}
      {modoColapsado && (
        <div className="flex flex-col items-center gap-3 mt-6">
            <a href="https://wa.me/5516993259687" target="_blank" rel="noopener noreferrer">
              <img
                src="/whats.jpeg"
                alt="WhatsApp"
                className="h-8 w-10 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
            <a href="https://github.com/LucasPim00" target="_blank" rel="noopener noreferrer">
              <img
                src="/github.jpeg"
                alt="Github"
                className="h-8 w-8 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
            <a href="https://www.instagram.com/lucas.pim00/" target="_blank" rel="noopener noreferrer">
              <img
                src="/insta.jpeg"
                alt="Instagram"
                className="h-8 w-10 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
        </div>
      )}

      {/* Rodapé só aparece quando sidebar completo */}
      {!modoColapsado && (
        <div className="mt-auto pl-1 px-6 pt-2">
          <div className="mb-3 text-m text-gray-400 hover:text-purple-400 transition cursor-default">
            <FaBookOpen className="inline-block mr-2" />
            'Meus Contatos'
          </div>

          <div className="flex items-start gap-3 ml-4 pt-1">
            <a href="https://wa.me/5516993259687" target="_blank" rel="noopener noreferrer">
              <img
                src="/whats.jpeg"
                alt="WhatsApp"
                className="h-8 w-10 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
            <a href="https://github.com/LucasPim00" target="_blank" rel="noopener noreferrer">
              <img
                src="/github.jpeg"
                alt="Github"
                className="h-8 w-8 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
            <a href="https://www.instagram.com/lucas.pim00/" target="_blank" rel="noopener noreferrer">
              <img
                src="/insta.jpeg"
                alt="Instagram"
                className="h-8 w-10 rounded-full hover:scale-110 transition duration-200"
              />
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}