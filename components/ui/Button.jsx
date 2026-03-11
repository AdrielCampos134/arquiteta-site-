import Link from "next/link";

const variants = {
  text: "minimal-link inline-flex min-h-11 items-center px-1 py-1 text-sm font-medium text-gray-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
  border:
    "inline-flex min-h-11 items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
  minimal:
    "inline-flex min-h-11 items-center justify-center rounded-full border border-gray-light bg-white/85 px-4 py-2 text-sm text-gray-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-pastel-azul/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
};

export default function Button({ href, variant = "text", children, className = "", ...props }) {
  const base = `${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={base} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={base} {...props}>
      {children}
    </button>
  );
}
