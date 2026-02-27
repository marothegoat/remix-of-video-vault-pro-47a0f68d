import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is VidGrab free to use?",
    a: "Yes, VidGrab is 100% free. There are no hidden fees, no subscriptions, and no limits on the number of downloads you can make.",
  },
  {
    q: "What video platforms are supported?",
    a: "We support YouTube, TikTok, Instagram, Facebook, Twitter/X, Vimeo, Dailymotion, and many more platforms. Simply paste the video URL and we'll handle the rest.",
  },
  {
    q: "Is it safe to use VidGrab?",
    a: "Absolutely. We don't store any of your personal data or downloaded files. All conversions happen on secure servers and files are deleted after processing.",
  },
  {
    q: "What formats can I download in?",
    a: "You can download videos in MP4 (720p, 1080p, 4K) or extract audio in MP3 format with high-quality bitrates up to 320kbps.",
  },
  {
    q: "Do I need to install any software?",
    a: "No installation required. VidGrab works entirely in your browser on any device — desktop, tablet, or mobile.",
  },
  {
    q: "Why did my download fail?",
    a: "Some videos may be restricted by the platform or are private. Make sure the video is publicly accessible and try again. If the issue persists, contact us via WhatsApp.",
  },
  {
    q: "Can I download TikTok videos without watermark?",
    a: "Yes! VidGrab removes the TikTok watermark automatically, giving you clean, high-quality video files.",
  },
  {
    q: "What is the maximum video quality available?",
    a: "We support up to 4K (2160p) resolution for platforms that offer it. The quality depends on the original video's available resolutions.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 relative">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-gradient-primary">Questions</span>
        </h2>
        <p className="text-muted-foreground">
          Everything you need to know about using VidGrab.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
