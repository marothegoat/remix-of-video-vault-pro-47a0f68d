import { Facebook, Twitter, Linkedin } from "lucide-react";

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const shareUrl = "https://vidgraby.netlify.app/";
const shareTitle = "VidGraby — Free Video Downloader & Converter";

const buttons = [
  {
    label: "Facebook",
    icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    hoverClass: "hover:text-[hsl(220,46%,48%)]",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    hoverClass: "hover:text-[hsl(203,89%,53%)]",
  },
  {
    label: "Pinterest",
    icon: PinterestIcon,
    href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`,
    hoverClass: "hover:text-[hsl(0,78%,51%)]",
    custom: true,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    hoverClass: "hover:text-[hsl(210,76%,42%)]",
  },
];

const ShareButtons = () => (
  <section className="py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
      <p className="text-sm font-medium text-muted-foreground">Share VidGraby</p>
      <div className="flex items-center gap-3">
        {buttons.map((b) => {
          const Icon = b.icon;
          return (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${b.label}`}
              className={`w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-colors ${b.hoverClass}`}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default ShareButtons;
