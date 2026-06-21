import { MAPS_EMBED_URL } from "@/lib/constants";

export function ContactMap() {
  return (
    <div className="overflow-hidden flex-1 min-h-[300px]">
      <iframe
        src={MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>
  );
}
