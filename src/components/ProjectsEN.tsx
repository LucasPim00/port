//src/components/Projects.tsx
'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

// Dados de projetos separados por seção
const projetosFront = [
  {
    id: 1,
    title: 'Virtual Store',
    description: 'Real e-commerce with state manipulation, rendering and integration of mocked components and data',
    image: '/projetos/loja.jpg',
    techs: ['React', 'TypeScript', 'CRA', 'Context API', 'ESLint + Prettier', 'Husky + Lint-staged'],
    link: 'https://loja-two-fawn.vercel.app/', 
    code: 'https://github.com/LucasPim00/Loja',
  },
  {
    id: 2,
    title: 'Sales Page',
    description: 'A modern, responsive landing page designed to promote digital courses or services',
    image: '/projetos/curso.jpg',
    techs: ['JavaScript Vanilla', 'Tailwind', 'SASS', 'AOS animation'],
    link: 'https://pagina-vendedor.vercel.app/', 
    code: 'https://github.com/LucasPim00/Pagina-vendedor',
  },
  {
    id: 3,
    title: 'Animated Portfolio',
    description: 'It features a modern design, ScrollReveal animations, and dark mode. My developer debut was clear and interactive.',
    image: '/projetos/port.jpg',
    techs: ['HTML', 'CSS','JavaScript', 'ScrollReveal', 'SVGs inline'],
    link: 'https://port-animado.vercel.app/', 
    code: 'https://github.com/LucasPim00/port-animado/tree/main',
  },
  {
    id: 3,
    title: 'Real-time Stock Exchange',
    description: 'Time zone-aware financial dashboard with account authentication',
    image: '/projetos/cripto.jpg',
    techs: ['Vite', 'Next','React', 'Tailwind'],
    link: 'https://dash-cripto.vercel.app/dashboard', 
    code: 'https://github.com/LucasPim00/Dash-cripto',
  },
  {
    id: 4,
    title: 'Clone Nubank',
    description: 'Project made in Figma, but with React 18 for UI, Prisma ORM for PDF integration to the database and Public folder for PDF conversion',
    image: '/projetos/nubank.png',
    techs: ['Next', 'Tailwind', 'PostCSS', 'Figma'],
    link: 'https://nubank-tawny.vercel.app/', 
    code: 'https://github.com/LucasPim00/nu',
  },
  {
    id: 5,
    title: 'Android informational site',
    description: 'This is a static and semantic site, used to learn how to use coupling, various padding and features.',
    image: '/projetos/android.jpg',
    techs: ['JavaScrpit', 'HTML', 'CSS'],
    link: 'https://projeto-android-ten-jet.vercel.app/', 
    code: 'https://github.com/LucasPim00/Projeto-android',
  },
  {
    id: 6,
    title: 'My Iphone',
    description: 'This project simulates an iPhone-style mobile interface, with links to social networks that open inside an iframe.',
    image: '/projetos/iphone.jpg',
    techs: ['HTML', 'CSS', 'Iframe'],
    link: 'https://projeto-iphone-chi.vercel.app/', 
    code: 'https://github.com/LucasPim00/Projeto-social',
  },
  
];

const projetosBack = [
  {
    id: 1,
    title: 'PDF Generator',
    description: 'The system allows you to fill out a form, generate a PDF file with the data, or import an existing PDF. ',
    image: '/projetos/PDF.jpg',
    techs: ['Next','Node.js', 'TypeScript', 'PDF-Parse','Zod', 'PostCSS + Autoprefixer', 'Prisma'],
    link: 'https://gerador-pdf-urp2.vercel.app/', 
    code: 'https://github.com/LucasPim00/Gerador-PDF',
  },
  {
    id: 2,
    title: 'Mini-Project Library',
    description: 'A gallery of Mini-Projects allowing you to add new projects and link them directly to the database',
    image: '/projetos/biblioteca.jpg',
    techs: ['Next', 'PostCSS+Autoprefixer','React', 'Prisma ORM','SQLite','Framer Motion'],
    link: 'https://biblioteca-ufia.vercel.app/',
    code: 'https://github.com/LucasPim00/Biblioteca',
  },
  {
    id: 3,
    title: 'Task Manager',
    description: 'Windows XP design, REST API separated from the front to momentarily see the front with the database',
    image: '/projetos/todo.jpg',
    techs: ['Node.js', 'TypeScript','JavaScript Vanilla', 'Prisma ORM','CORS','PostgreSQL'],
    link: 'https://tarefas-vert.vercel.app/',
    code: 'https://github.com/LucasPim00/tarefas',
  },
  {
    id: 4,
    title: 'Form Back',
    description: 'A web form that allows you to enter data and list it on a second page. Ideal for organizing and viewing customers.',
    image: '/projetos/formulario.jpg',
    techs: ['Next','Node.js', 'TypeScript', 'Prisma ORM','SQLite','PostCSS'],
    link: 'https://form-back-hgfy.vercel.app/',
    code: 'https://github.com/LucasPim00/formBACK',
  },
];

const projetosFull = [
  {
    id: 1,
    title: 'Betting House',
    description: 'Interactive platform related to betting, financial transactions, cryptocurrencies and football matches.',
    image: '/projetos/apostas.jpg',
    techs: ['React', 'React Router DOM', 'React Toastify', 'React Hook Form', 'Node.js','CssBaseline', 'Styled-Components','Material UI', 'Yup'],
    link: 'https://apostas-8v29.vercel.app/', 
    code: 'https://github.com/LucasPim00/apostas', 
  },
  {
    id: 2,
    title: 'Project Organizer',
    description: 'Project with Next.Auth features, folder with two-factor security done',
    image: '/projetos/geralFULL.jpg',
    techs: ['Next.js', 'React', 'typescript', 'Node.js', 'Prisma', 'Tailwind'],
    link: 'https://organizador-de-projetos-toyn.vercel.app/', 
    code: 'https://github.com/LucasPim00/Organizador-de-Projetos', 
  },
  {
    id: 3,
    title: 'Miles Project',
    description: 'Institutional website for miles points programming, with animated loading, highlighted flashes and responsiveness adapted for mobile and desktop.',
    image: '/projetos/smiles.jpg',
    techs: ['Next','TypeScript','Tailwind','Prisma','Lucide React','Figma','GeistVF','Hooks'],
    link: 'https://milhas-three.vercel.app/', 
    code: 'https://github.com/LucasPim00/milhas',
  },
  {
    id: 4,
    title: 'Hairdresser APP',
    description: 'APP with location, authentication and corporate database with efficient access and control system',
    image: '/projetos/barbeiro.jpg',
    techs: ['Next','TypeScript', 'Prisma ORM', 'Supabase', 'SQLite', 'Swiper', 'PostCSS'],
    link: 'https://cabeleireiro-1mja93ugk-lucas-pims-projects.vercel.app/', 
    code: 'https://github.com/LucasPim00/cabeleireiro',
  }, 
];

export default function Projects() {
  const renderCarousel = (title: string, projetos: any[]) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(projetos.length / itemsPerPage);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToPage = (index: number) => {
      const container = scrollRef.current;
      if (container) {
        container.scrollTo({
          left: index * container.offsetWidth,
          behavior: 'smooth',
        });
        setCurrentPage(index);
      }
    };

    return (
      // 🔽 container do carrossel com padding ajustado para alinhar com outras seções
      <section className="bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg px-6 py-10 border border-zinc-700 ">

        {/* 🔽 Título com linha degradê abaixo */}
        <div className="mb-6">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <div className="h-2 w-80 bg-gradient-to-r from-red-400 to-white rounded-full mt-2" />
        </div>

        <div className="relative">
          {/* Botão Esquerda */}
          <button
            onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600/30 hover:bg-red-400/50 text-white p-2 text-5xl rounded-full"
          >
            ‹
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory px-4 py-6 scrollbar-hide"
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex-shrink-0 w-full flex justify-center gap-6 px-6 snap-start"
              >
                {projetos
                  .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                  .map((proj) => (
                    <div
                      key={proj.id}
                      className="relative bg-[#111827] rounded-lg p-4 w-[300px] h-[350px] flex flex-col justify-between shadow-lg border border-red-400 group hover:scale-105 transition-transform"
                    >
                     <Image 
                          src={proj.image} 
                          alt={proj.title} 
                          width={300} 
                          height={150} 
                          className="rounded-t-md w-full object-cover h-36" 
                        /> 
                      {/* Imagem com botão de ação flutuante */}
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          opacity-0 group-hover:opacity-100 
                          flex flex-col items-center gap-2 
                          transition"
                        >
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 px-4 py-2 rounded text-white font-bold flex items-center gap-2 transition cursor-pointer"
                      >
                        👁 Project
                      </a>

                      {/*<a
                        href={proj.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 px-4 py-2 rounded text-white font-bold flex items-center gap-2 transition cursor-pointer"
                      >
                        🧠 Code
                      </a>*/}
                      
                    </div>

                      {/* Título e descrição */}
                      <div className="mt-4">
                        <h3 className="text-white text-lg font-semibold mb-1">{proj.title}</h3>
                        <p className="text-sm text-gray-300">{proj.description}</p>
                      </div>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {proj.techs.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Botão Direita */}
          <button
            onClick={() => scrollToPage(Math.min(totalPages - 1, currentPage + 1))}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-600/30 hover:bg-red-400/50 text-white p-2 text-5xl rounded-full"
          >
            ›
          </button>
        </div>

        {/* Bolinhas de paginação */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToPage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === currentPage ? 'bg-red-400' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-10 px-4">
    <div id="projetos">{renderCarousel('🌐 Projects Front-end', projetosFront)}</div>
    <div id="projetosB">{renderCarousel('🧩 Projects Back-end', projetosBack)}</div>
    <div id="projetosF">{renderCarousel('🚀 Projects FullStack', projetosFull)}</div>
  </div>
  );
}