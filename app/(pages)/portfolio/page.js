import PortfolioGrid from "@/components/PortfolioGrid";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio | Ana Costa",
};

export default function PortfolioPage() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <header className="page-shell max-w-3xl space-y-3">
        <p className="section-eyebrow">Projetos</p>
        <h1 className="section-title text-4xl sm:text-5xl">Portfolio</h1>
        <p className="section-copy">Selecao de projetos residenciais, comerciais e culturais com foco em clareza espacial.</p>
      </header>
      <PortfolioGrid projects={projects} />
    </section>
  );
}
