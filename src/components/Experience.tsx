export default function Experience() {
  return (
    <section id="experience" className="p-4 w-full scroll-mt-24">

      <div className="relative bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">Experiências</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-cyan-400 to-white rounded-full mb-6" />
        <a
        href="/certificados/CURRICULO.pdf" 
        download
        className="absolute top-4 right-4 group"
        >
        <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg shadow-md transition-all relative">
          📄
          {/* Tooltip com a mensagem */}
          <span className="absolute -left-[250%] top-1/2 -translate-y-1/2 bg-cyan-500 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Veja meu currículo
          </span>
        </button>
        </a>

        <p className="text-white text-xl leading-relaxed">
          Ainda não possuo experiência profissional no mercado de programação, mas estou em constante aprendizado e aprimoramento das minhas habilidades.
          Estou em busca da minha primeira oportunidade para aplicar meus conhecimentos, colaborar com equipes e crescer junto com os desafios do mundo real da tecnologia.
        <br /><br />
        Meu objetivo é construir uma carreira como desenvolvedor, iniciando em projetos reais e evoluindo continuamente como profissional.
        Pretendo atuar em equipes de tecnologia, aprender com os desafios do dia a dia e futuramente me especializar em desenvolvimento FullStack.
        </p>
      </div>
    </section>
  );
}




