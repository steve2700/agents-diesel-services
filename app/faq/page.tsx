import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { MovingImage } from "@/components/moving-image"
import { BrandStrip } from "@/components/brand-strip"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Truck Repair FAQ",
  description: "Answers to common questions about truck repairs, quotes, servicing, fleet maintenance and areas covered by Agents Diesel Services in Gauteng.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Pretoria, Centurion, Midrand, Germiston, Kempton Park, Boksburg, Benoni, Alberton, Roodepoort, Krugersdorp and Vereeniging." },
  { q: "How do I get a quote?", a: "Complete the job card on our website. It opens in WhatsApp, ready to send. Add photos of the problem and we will come back with a quote." },
  { q: "Which truck brands do you repair?", a: "We work on Isuzu, Hino, UD Trucks, Scania and Mazda, and on other major heavy duty and commercial brands used in South Africa. Put your make and model on the job card and we will confirm." },
  { q: "Can you repair accident damaged trucks?", a: "Yes. We rebuild front ends, repair cabs and bumpers, do panel beating and respray. See the before and after photos on our accident repairs page." },
  { q: "What is truck bed rubberizing?", a: "It is a tough sprayed rubber coating for truck and bakkie beds. We repair and sand the bed first, then coat it for a non slip, scratch resistant finish." },
  { q: "Can you repair trailers and tippers?", a: "Yes. We repair trailer axles, bearings, brakes, tipper bodies, flatbeds and hydraulics." },
  { q: "Do you do spray painting?", a: "Yes. We respray cabs and bodies, repair accident damage and match fleet colours." },
  { q: "Do you offer fleet maintenance?", a: "Yes. Tell us how many trucks you run and how far they travel and we will set up a service schedule." },
  { q: "What if my truck has broken down on the road?", a: "Call us right away on the number at the top of the page, then send your job card with your location so we can plan the next step." },
  { q: "Do you fit diesel tanks?", a: "Yes. We fit and repair aluminium and steel diesel tanks, and repair fuel system faults." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Truck repair questions, answered" image={{ src: "/truck-agents-mechanics-servicing-trucks-yard.jpg", alt: "Mechanics servicing trucks in the yard" }} text="Quick answers for owner drivers and fleet managers.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Faq items={items} />
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:sticky lg:top-32 lg:grid-cols-1">
          <MovingImage src="/truck-agents-ud-truck-cab-repair-restored-after.jpg" alt="UD truck cab restored after repair" className="aspect-[4/3] rounded-[2rem]" />
          <MovingImage src="/truck-agents-truck-bed-rubberizing-after-coating.jpg" alt="Truck bed with a fresh rubberized coating" className="aspect-[4/3] rounded-[2rem]" variant={1} />
        </div>
      </section>
      <BrandStrip />
      <CtaBand />
    </>
  )
}
