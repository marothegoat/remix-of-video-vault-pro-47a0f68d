import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => (
  <>
    <Navbar />
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            VidGrab <span className="text-gradient-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tips, guides, and tutorials for downloading and converting videos from any platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block glass rounded-2xl p-6 h-full hover:border-primary/20 transition-all group"
              >
                <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Blog;
