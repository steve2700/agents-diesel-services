import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { SERVICES } from "@/lib/services"

export const metadata: Metadata = {
  title: "Truck Repair, Servicing and Maintenance Services in Gauteng",
  description: "All Agents Diesel Services services: heavy duty truck repairs, engine overhauls, gearbox repairs, servicing, spray painting, diesel tanks, trailer axles, tipper bodies and brakes across Gauteng.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} title="Truck repair services across Gauteng" image={{ src: "/heavy-duty-truck-repairs.jpg", alt: "Heavy duty truck being repaired in the Agents Diesel Services workshop" }} text="Everything your truck or trailer needs, from a full engine overhaul to a coat of paint. Pick a service or send a job card and we will sort it.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_1fr]">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="min-h-52" sizes="220px" markWidth={44} />
              <div className="p-6">
                <h2 className="text-3xl font-semibold leading-none">{s.name}</h2>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-4 inline-block font-display text-xl font-semibold text-signal">Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
