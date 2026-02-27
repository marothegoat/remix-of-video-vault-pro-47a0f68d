import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Loader2, Link as LinkIcon, Sparkles, CheckCircle, Clock, User } from "lucide-react";
import { fetchVideoInfo, type VideoResult, type MediaItem } from "@/lib/videoApi";
import { toast } from "sonner";

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VideoResult | null>(null);

  const handleConvert = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await fetchVideoInfo(url);
      setResult(data);
      toast.success("Video info fetched! Choose a format to download.");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (media: MediaItem) => {
    window.open(media.url, "_blank");
  };

  const getTypeIcon = (type: string) => {
    if (type === "audio") return "🎵";
    if (type === "video") return "🎬";
    if (type === "image") return "🖼️";
    return "📁";
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
                  <Sparkles size={18} />
                )}
                {loading ? "Fetching..." : "Get Links"}
              </button>
            </div>
          </div>

          {/* Result Card */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 glass rounded-2xl p-6 text-left"
              >
                {/* Video info header */}
                <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                  {result.thumbnail && (
                    <img
                      src={result.thumbnail}
                      alt={result.title}
                      className="w-full sm:w-44 h-28 object-cover rounded-xl"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {result.source && (
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {result.source}
                        </span>
                      )}
                      <CheckCircle size={14} className="text-primary" />
                      <span className="text-xs text-primary">Ready</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 leading-snug line-clamp-2">
                      {result.title || "Untitled"}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      {result.duration && (
                        <span className="flex items-center gap-1"><Clock size={12} />{result.duration}</span>
                      )}
                      {result.author && (
                        <span className="flex items-center gap-1"><User size={12} />{result.author}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Download options */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Available Downloads ({(result.medias ?? []).length})
                  </p>
                  {(result.medias ?? []).length === 0 && (
                    <p className="text-sm text-muted-foreground">No downloadable media found for this URL.</p>
                  )}
                  {(result.medias ?? []).map((media, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-muted/30 rounded-xl px-4 py-3 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm">
                          {getTypeIcon(media.type)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">
                            {media.quality || media.type}
                          </span>
                          <span className="text-xs text-muted-foreground ml-2">
                            .{media.extension}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDownload(media)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs transition-all hover:brightness-110 glow-primary"
                      >
                        <Download size={13} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
