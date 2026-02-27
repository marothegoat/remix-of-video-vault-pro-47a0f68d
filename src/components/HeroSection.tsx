import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, Link as LinkIcon, Music, Film, MonitorPlay, Sparkles } from "lucide-react";

const formats = [
  { label: "MP3", icon: Music, desc: "Audio" },
  { label: "MP4", icon: Film, desc: "720p" },
  { label: "1080p", icon: MonitorPlay, desc: "Full HD" },
  { label: "4K", icon: Sparkles, desc: "Ultra HD" },
];

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("MP3");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { title: string; thumbnail: string }>(null);

  const handleConvert = () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    // Mock API response
    setTimeout(() => {
      setResult({
        title: "Sample Video — High Quality Download",
        thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            Download Any Video
            <br />
            <span className="text-gradient-primary">In Seconds</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Convert YouTube, TikTok, Instagram & more to MP3 or MP4. Free, fast, and no registration required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* URL Input */}
          <div className="glass rounded-2xl p-2 mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3">
                <LinkIcon size={20} className="text-muted-foreground shrink-0" />
                <input
                  type="url"
                  placeholder="Paste your video URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm md:text-base"
                  onKeyDown={(e) => e.key === "Enter" && handleConvert()}
                />
              </div>
              <button
                onClick={handleConvert}
                disabled={loading || !url.trim()}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed glow-primary animate-pulse-glow"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Download size={18} />
                )}
                {loading ? "Converting..." : "Convert"}
              </button>
            </div>
          </div>

          {/* Format Selector */}
          <div className="flex justify-center gap-3 flex-wrap">
            {formats.map((f) => (
              <button
                key={f.label}
                onClick={() => setFormat(f.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  format === f.label
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <f.icon size={16} />
                {f.label}
                <span className="text-xs opacity-60">{f.desc}</span>
              </button>
            ))}
          </div>

          {/* Mock Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 glass rounded-2xl p-6 text-left"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src={result.thumbnail}
                  alt="Video thumbnail"
                  className="w-full sm:w-40 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{result.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Format: {format} • Ready to download</p>
                  <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 glow-primary">
                    <Download size={16} />
                    Download {format}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1">✓ 100% Free</span>
          <span className="flex items-center gap-1">✓ No Registration</span>
          <span className="flex items-center gap-1">✓ Unlimited Downloads</span>
          <span className="flex items-center gap-1">✓ All Platforms Supported</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
