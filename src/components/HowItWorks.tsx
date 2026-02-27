import { motion } from "framer-motion";
import { Link2, Settings, Download, Zap } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste Link",
    desc: "Copy the video URL from YouTube, TikTok, Instagram, or any supported platform.",
  },
  {
    icon: Settings,
    title: "Choose Format",
    desc: "Select your preferred format: MP3 for audio, or MP4 in 720p, 1080p, or 4K.",
  },
  {
    icon: Zap,
    title: "Convert",
    desc: "Hit convert and our servers process your video in seconds with maximum quality.",
  },
  {
    icon: Download,
    title: "Download",
    desc: "Your file is ready! Click download and save it directly to your device.",
  },
];

const HowItWorks = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Download any video in just four simple steps. No software required.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <step.icon size={24} className="text-primary" />
            </div>
            <div className="text-xs font-mono text-primary mb-2">Step {i + 1}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
