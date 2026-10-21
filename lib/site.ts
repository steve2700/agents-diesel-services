// TEMPORARY PLACEHOLDERS: swap these when the client confirms the real details.
// Every phone, WhatsApp and email link on the site reads from this one file.
export const SITE = {
  name: "Agents Diesel Services",
  url: "https://www.agentsdieselservices.co.za",
  phoneDisplay: "073 237 3002",
  phoneTel: "+27732373002",
  whatsapp: "27732373002",
  email: "info@agentsdieselservices.co.za",
  tagline: "Repairs, Services & Maintenance",
  region: "Gauteng and its outskirts",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
