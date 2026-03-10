import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog | Ana Costa",
};

export default function BlogPage() {
  return (
    <section className="space-y-8 sm:space-y-10">
      <header className="page-shell max-w-3xl space-y-3">
        <p className="section-eyebrow">Reflexoes</p>
        <h1 className="section-title text-4xl sm:text-5xl">Blog</h1>
        <p className="section-copy">Notas visuais sobre design, materiais, luz e simplicidade no cotidiano.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
