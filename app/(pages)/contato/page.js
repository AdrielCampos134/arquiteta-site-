import ContactForm from "@/components/ContactForm";
import FallbackImage from "@/components/ui/FallbackImage";

export const metadata = {
  title: "Contato | Ana Costa",
};

export default function ContatoPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="page-shell">
        <p className="section-eyebrow">Contato</p>
        <h1 className="section-title mt-2 text-4xl sm:text-6xl">Vamos criar algo unico?</h1>
        <p className="section-copy mt-4 max-w-md">
          Para projetos residenciais, comerciais ou consultoria criativa, envie sua mensagem e retorno com os proximos passos.
        </p>

        <div className="mt-7 overflow-hidden rounded-2xl border border-gray-light/70">
          <FallbackImage
            src="/images/arquitetura/projeto-6.jpg"
            fallbackSrc="/images/projetos/projeto-6.svg"
            alt="Interior arquitetonico"
            width={1200}
            height={800}
            className="h-52 w-full object-cover"
          />
        </div>

        <div className="section-copy mt-8 space-y-3 border-t border-gray-light/80 pt-6 sm:mt-10">
          <p>contato@anacosta.com</p>
          <p>(11) 98765-4321</p>
          <a
            href="https://linkedin.com/in/anacosta"
            target="_blank"
            rel="noreferrer"
            className="minimal-link inline-block text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="section-card p-5 sm:p-6">
        <ContactForm />
      </div>
    </section>
  );
}
