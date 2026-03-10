import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <div className="space-y-8 pb-10 sm:space-y-20">
      <Hero />
      <FeaturedProject project={featuredProject} />

      <section className="section-card mx-auto max-w-3xl px-5 py-8 text-center sm:py-12">
        <p className="section-title text-2xl sm:text-3xl">Curioso sobre meus trabalhos?</p>
        <div className="mt-6">
          <Button href="/portfolio" variant="border" className="w-full sm:w-auto">
            Ver Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}
