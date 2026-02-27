import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/message/S4NV3OATC2R7J1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)/0.3] animate-pulse-glow hover:scale-110 transition-transform"
    style={{ boxShadow: "0 0 20px hsl(142 70% 45% / 0.4)" }}
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default WhatsAppButton;
