import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroConvoy } from "@/components/hero-convoy"
import { PhotoStrip } from "@/components/photo-strip"
import { MovingImage } from "@/components/moving-image"
import { JobCard } from "@/components/job-card"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { BrandStrip } from "@/components/brand-strip"
import { BeforeAfter } from "@/components/before-after"
import { BA_HINO, BA_UD, BA_BED } from "@/lib/services"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"

export const metadata: Metadata = {
  title: { absolute: "Agents Diesel Services | Heavy Duty Truck Repairs in Gauteng" },
  alternates: { canonical: "/" },
}

const why = [
  { t: "A clear quote first", d: "Send a job card with photos. You get a price and a time frame before any work starts." },
  { t: "Every make and size", d: "Truck tractors, rigid trucks, tippers, flatbeds and trailers. If it carries a load, we can look at it." },
  { t: "Built for busy operators", d: "One WhatsApp job card gets us your truck, your problem and your location in under a minute." },
  { t: "Fleets and owner drivers", d: "Scheduled maintenance for fleets, and fast repairs for the single truck that cannot sit still." },
]

const faqs = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Pretoria, Centurion, Midrand, Germiston, Kempton Park, Boksburg, Benoni, Alberton, Roodepoort, Krugersdorp and Vereeniging." },
  { q: "How do I get a quote?", a: "Fill in the job card on this page and it opens in WhatsApp, ready to send. Add photos of the problem in the chat and we will come back with a quote." },
  { q: "Which truck brands do you work on?", a: "We work on Isuzu, Hino, UD Trucks, Scania and Mazda, and on other major heavy duty and commercial brands. Put your truck make and model on the job card and we will confirm." },
  { q: "Do you service fleets?", a: "Yes. We set up service schedules for fleets so trucks are maintained before they break down." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-steel">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="rise font-display text-2xl font-semibold text-signal" style={{ animationDelay: "0ms" }}>Agents Diesel Services, Gauteng</p>
            <h1 className="rise mt-3 text-[3.6rem] font-bold leading-[0.9] sm:text-7xl lg:text-[6.4rem]" style={{ animationDelay: "120ms" }}>
              Heavy duty truck repairs across Gauteng.
            </h1>
            <p className="rise mt-6 max-w-xl text-xl leading-relaxed text-graphite" style={{ animationDelay: "240ms" }}>
              Engines, gearboxes, brakes, spray painting and servicing. Tell us what is wrong and where the truck is, and we will tell you what it costs.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <CallButton pulse />
              <LinkButton href="/contact#job-card" look="outline">Get a Free Quote</LinkButton>
              <WhatsAppButton label="WhatsApp" />
            </div>
            <ul className="rise mt-10 flex flex-wrap gap-x-8 gap-y-2 font-display text-xl font-medium text-graphite" style={{ animationDelay: "480ms" }}>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />Isuzu, Hino, UD, Scania, Mazda</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />Gauteng and its outskirts</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />Job card in under a minute</li>
            </ul>
          </div>
          <HeroConvoy />
        </div>
      </section>

      <BrandStrip />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-5xl font-bold leading-[0.95] md:text-6xl">Truck repair services from the engine to the trailer</h2>
          <LinkButton href="/services" look="dark" size="md">See all services</LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[4/3]" />
              <div className="p-6">
                <h3 className="text-3xl font-semibold leading-none">{s.name}</h3>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xl font-semibold text-signal">
                  View service
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-white transition group-hover:translate-x-1">&rsaquo;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Before and after */}
      <section className="bg-white py-20" aria-labelledby="results">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="results" className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-6xl">See the difference. Drag to compare.</h2>
          <p className="mt-4 max-w-2xl text-lg text-graphite">Real trucks from our workshop. Accident damage rebuilt, cabs restored and worn beds protected.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <BeforeAfter item={BA_HINO} />
            <BeforeAfter item={BA_UD} />
            <BeforeAfter item={BA_BED} />
          </div>
          <div className="mt-10"><LinkButton href="/services/truck-accident-repairs-and-panel-beating" look="dark">See accident repairs</LinkButton></div>
        </div>
      </section>

      {/* Job card */}
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-5xl font-bold leading-[0.95] md:text-6xl">Send your job card on WhatsApp</h2>
            <p className="mt-4 text-xl text-silver">Four quick answers and your truck is booked into our queue. No forms to wait on, no phone tag.</p>
          </div>
          <JobCard />
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-6xl">Why truck owners send us the job</h2>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {why.map((w) => (
            <div key={w.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-3xl font-semibold">{w.t}</h3>
              <p className="mt-2 max-w-md text-lg leading-relaxed text-graphite">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="pb-20" aria-labelledby="work">
        <h2 id="work" className="mx-auto mb-8 max-w-7xl px-5 text-5xl font-bold md:text-6xl">From our workshop</h2>
        <PhotoStrip />
      </section>

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-6xl">Truck repairs near you in Gauteng</h2>
          <p className="mt-4 max-w-2xl text-lg text-graphite">We operate across Gauteng and its outskirts. Find your area to see what we cover there.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-full border-2 border-ink px-6 py-2.5 font-display text-2xl font-medium transition hover:bg-signal hover:border-signal hover:text-white">{a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-5xl font-bold md:text-6xl">Common questions</h2>
        <Faq items={faqs} />
      </section>

      <CtaBand />
    </>
  )
}
