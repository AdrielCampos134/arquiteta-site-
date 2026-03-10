import About from "@/components/About";
import { about } from "@/lib/data";

export const metadata = {
  title: "Sobre | Ana Costa",
};

export default function SobrePage() {
  return (
    <section>
      <About about={about} />
    </section>
  );
}
