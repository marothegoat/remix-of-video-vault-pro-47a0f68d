import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("- **")) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                <span dangerouslySetInnerHTML={{
                  __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                }} />
              </li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d\./)) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground text-sm leading-relaxed">
                <span dangerouslySetInnerHTML={{
                  __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                }} />
              </li>
            ))}
          </ol>
        );
      }
      if (block.startsWith("*") && block.endsWith("*")) {
        return <p key={i} className="text-sm text-muted-foreground italic my-4">{block.replace(/\*/g, "")}</p>;
      }
      return (
        <p key={i} className="text-muted-foreground text-sm leading-relaxed my-4"
          dangerouslySetInnerHTML={{
            __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
          }}
        />
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
            </div>

            <div className="glass rounded-2xl p-6 md:p-10">
              {renderContent(post.content)}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
