export default function AboutMe() {
  return (
    <section id="sobre" className="p-4 w-full scroll-mt-24">
      <div className="bg-[rgba(100,100,100,0.2)] rounded-2xl shadow-lg p-6 border border-zinc-700">
        <h2 className="text-3xl font-bold text-white mb-2">Sobre Mim</h2>
        <div className="h-2 w-80 bg-gradient-to-r from-cyan-400 to-white rounded-full mb-6" />
        <p className="text-white text-xl leading-relaxed">
          Sou um desenvolvedor <b>em formação</b> com grande interesse em soluções criativas.
          Focado sempre nos estudos, desenvolvendo projetos e buscando minha primeira oportunidade para integrar uma equipe e aplicar minhas habilidades na prática.
          <br></br>
          Tenho conhecimento em desenvolvimento web com foco em tecnologias como <b> Next, Tailwind CSS</b> e integração com banco de dados usando <b>Prisma ORM</b> e além disso tenho estudos em outras áreas como <b>QA, Ciência de Dados, Cloud Computing e Designer básico</b>.
        </p>
      </div>
    </section>
  );
}