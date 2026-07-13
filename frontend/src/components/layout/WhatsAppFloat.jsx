import { BRAND } from "@/data/content";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      aria-label="Falar no WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
