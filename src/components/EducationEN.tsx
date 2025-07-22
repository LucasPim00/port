type TipoCurso = 'faculdade' | 'curso' | 'tecnico';

export default function Education() {
    const cursos: {
      instituicao: string;
      titulo: string;
      periodo: string;
      tipo: TipoCurso;
      certificado?: string;
      }[] = [
    {
      instituicao: "Faculdade Metropolitana",
      titulo: "Análise e Desenvolvimento de Sistemas",
      periodo: "06/2023 - 06/2026 (em andamento)",
      tipo: "faculdade",
    },
    {
      instituicao: "Udemy (Online)",
      titulo: "Next.js (20h)",
      periodo: "05/2025",
      tipo: "curso",
      certificado: "/certificados/next.pdf",
    },
    {
      instituicao: "Udemy (Online)",
      titulo: "JavaScript com Node.js (24h)",
      periodo: "10/2023",
      tipo: "curso",
      certificado: "/certificados/javaScript.pdf",
    },
    {
      instituicao: "Udemy (Online)",
      titulo: "Banco de Dados e SQL (60h)",
      periodo: "05/2023",
      tipo: "curso",
      certificado: "/certificados/SQL.pdf",
    },
    {
      instituicao: "Curso em Vídeo (Online)",
      titulo: "HTML e CSS (160h)",
      periodo: "04/2023",
      tipo: "curso",
      certificado: "/certificados/HTML.pdf",
    },
    {
      instituicao: "Senai - Ribeirão Preto",
      titulo: "Caldeireiro",
      periodo: "12/2019",
      tipo: "tecnico",
      certificado: "/certificados/senai.pdf",
    },
    {
      instituicao: "ETEC - Ribeirão Preto",
      titulo: "Técnico em Administração",
      periodo: "12/2017",
      tipo: "tecnico",
      certificado: "/certificados/etec.pdf",
    },
    {
      instituicao: "ETEC - Ribeirão Preto",
      titulo: "Liderança em Gestão Empresarial",
      periodo: "05/2017",
      tipo: "tecnico",
      certificado: "/certificados/gestao.pdf",
    },
    {
      instituicao: "Prepara Cursos - Barrinha",
      titulo: "Profissional em Informática + Office",
      periodo: "06/2015",
      tipo: "tecnico",
      certificado: "/certificados/office.pdf",
    },
    
  ];
  const icones: Record<TipoCurso, string> = {
    faculdade: "/facul.png",
    curso: "/pc.png",
    tecnico: "/tec.png",
  };

  return (
     <section id="educacao" className="p-4 w-full scroll-mt-24">
      <div className="bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-red-400 to-white rounded-full mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className="relative bg-white/10 border border-red-500 rounded-xl p-4 hover:scale-105 transition overflow-hidden"
            >
              {/* Triângulo branco inclinado da parte superior direita até o meio inferior */}
              <div className="absolute top-0 right-0 w-0 h-0 border-b-[100px] border-l-[100px] border-t-white border-l-transparent z-0" />

              <div className="absolute bottom-2 right-2 z-10 group">
                <a href={curso.certificado} target="_blank" rel="noopener noreferrer">
                <img src={icones[curso.tipo]} alt="ícone" className="h-10 w-10 cursor-pointer" />
                <div className="absolute bottom-full mb-2 right-0 bg-gray-900 text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Analyze certificate
                </div>
                </a>
                </div>            

              {/* Conteúdo do card */}
              <h3 className="text-lg font-bold mb-1 relative z-10">{curso.titulo}</h3>
              <p className="text-sm relative z-10">{curso.instituicao}</p>
              <p className="text-xs text-gray-300 mt-1 relative z-10">{curso.periodo}</p>

              {/* Linha azul inferior */}
              <div className="absolute bottom-0 left-0 w-[99%] ml-1 h-[4px] bg-red-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}