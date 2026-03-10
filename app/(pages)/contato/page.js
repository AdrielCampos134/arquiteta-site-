import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contato | Ana Costa",
};

export default function ContatoPage() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="page-shell">
        <p className="section-eyebrow">Contato</p>
        <h1 className="section-title mt-2 text-4xl sm:text-5xl">Vamos conversar?</h1>
        <p className="section-copy mt-4 max-w-md">
          Se voce deseja iniciar um projeto ou conversar sobre consultoria, envie uma mensagem.
        </p>

        <div className="section-copy mt-10 space-y-3 border-t border-gray-light/80 pt-6">
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
