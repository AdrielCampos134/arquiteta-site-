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
        <h1 className="section-title text-5xl sm:text-6xl">Portfolio</h1>
        <p className="section-copy">Narrativas espaciais em residencias, interiores e experiencias comerciais com identidade contemporanea.</p>
      </header>
      <PortfolioGrid projects={projects} />
    </section>
  );
}
