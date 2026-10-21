import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { BrandStrip } from "@/components/brand-strip"
import { PhotoStrip } from "@/components/photo-strip"
import { BeforeAfter } from "@/components/before-after"
import { BA_HINO } from "@/lib/services"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "About Agents Diesel Services",
  description: "Agents Diesel Services repairs, services and maintains heavy duty trucks across Gauteng and its outskirts. Learn how we work and what truck owners can expect.",
  alternates: { canonical: "/about" },
}

const points = [
  { t: "Diagnose first", d: "We find the real fault before we quote, so you only pay for what the truck needs." },
  { t: "Quote before work", d: "Every job starts with a clear price and time frame. No surprises when you collect." },
  { t: "Show the parts", d: "We keep the worn parts so you can see what failed and why." },
  { t: "Keep you moving", d: "We work fast on breakdowns and plan ahead for fleets with scheduled maintenance." },
]

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace the copy below with the owner's real story, years in business and team details. */}
      <PageHero crumbs={[{ name: "About", href: "/about" }]} title="Truck repairs by people who know trucks" image={{ src: "/heavy-truck-repairs-shop.jpg", alt: "Heavy truck on the lift in the Agents Diesel Services workshop" }} text="Agents Diesel Services repairs, services and maintains heavy duty trucks across Gauteng and its outskirts.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">Our job is to keep your truck earning</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            A truck that is standing still costs you money every hour. We built Agents Diesel Services around that fact. We repair engines, gearboxes, brakes, bodies and trailers, and we service fleets so problems are caught before they stop a load.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            We serve owner drivers, small transport companies and larger fleets across Gauteng. Send us a job card on WhatsApp and we will get back to you with a plan.
          </p>
        </div>
        <MovingImage src="/truck-agents-mechanics-servicing-trucks-yard.jpg" alt="Mechanics servicing trucks in the Agents Diesel Services yard" className="aspect-[4/3] rounded-[2rem]" priority markWidth={68} />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-3xl font-semibold">{p.t}</h3>
              <p className="mt-2 max-w-md text-lg text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandStrip title="Trucks we repair every week" />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <BeforeAfter item={BA_HINO} />
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">Proof is in the finish</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">This Hino came in with serious front end damage. Our panel beaters and painters rebuilt it so it could go back to work. Drag the slider to see the result.</p>
        </div>
      </section>
      <section className="pb-20"><PhotoStrip /></section>
      <CtaBand />
    </>
  )
}
