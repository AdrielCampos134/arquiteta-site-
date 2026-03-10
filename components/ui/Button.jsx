import Link from "next/link";

const variants = {
  text: "minimal-link inline-flex min-h-11 items-center px-1 py-1 text-sm font-medium text-gray-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
  border:
    "inline-flex min-h-11 items-center justify-center rounded-sm border border-black px-3 py-2 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:border-gray-med hover:bg-pastel-bege/70 hover:text-gray-med focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
  minimal:
    "inline-flex min-h-11 items-center justify-center rounded-full border border-gray-light bg-white/85 px-4 py-2 text-sm text-gray-dark transition-colors duration-300 hover:bg-pastel-azul focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-med/35",
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
