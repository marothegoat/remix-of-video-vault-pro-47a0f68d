import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Alex M.", role: "Content Creator", text: "Best YouTube to MP3 converter I've ever used. Lightning fast and the quality is incredible. Replaced all my other tools.", rating: 5 },
  { name: "Sarah K.", role: "Student", text: "I use VidGrab daily for downloading lecture videos. The 1080p quality is perfect and it works on my phone too!", rating: 5 },
  { name: "James R.", role: "DJ / Producer", text: "The MP3 extraction quality at 320kbps is exactly what I need for my mixes. No other free tool comes close.", rating: 5 },
  { name: "Priya N.", role: "Social Media Manager", text: "TikTok downloads without watermark — game changer! My whole team uses VidGrab now for content repurposing.", rating: 5 },
  { name: "Carlos D.", role: "Filmmaker", text: "4K downloads work flawlessly. The conversion speed is unreal compared to other converters I've tried.", rating: 5 },
  { name: "Lena W.", role: "Blogger", text: "Simple, clean, and just works. No annoying ads or popups. Finally a downloader that respects its users.", rating: 5 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Wall of <span className="text-gradient-primary">Love</span>
        </h2>
        <p className="text-muted-foreground">
          Trusted by millions of users worldwide.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/20 transition-all"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 mb-5 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
