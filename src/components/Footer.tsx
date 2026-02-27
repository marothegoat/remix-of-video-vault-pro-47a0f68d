import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gradient-primary mb-3">VidGrab</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The fastest free online video downloader and converter. Download from YouTube, TikTok, Instagram & more.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Popular Tools</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>YouTube to MP3</li>
            <li>TikTok Downloader</li>
            <li>Instagram Reels Saver</li>
            <li>4K Video Downloader</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VidGrab. All rights reserved. For personal use only.
      </div>
    </div>
  </footer>
);

export default Footer;
