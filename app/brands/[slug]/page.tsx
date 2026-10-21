import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { BrandStrip } from "@/components/brand-strip"
import { BRANDS, getBrand } from "@/lib/brands"
import { SERVICES } from "@/lib/services"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const b = getBrand(slug)
  if (!b) return {}
  const title = `${b.name} Truck Repairs and Servicing in Gauteng`
  const description = `${b.name} truck repairs, servicing and maintenance in Gauteng. Engines, gearboxes, brakes, accident repairs and spray painting. Call Now or send a WhatsApp job card.`
  return {
    title, description,
    keywords: [`${b.name} truck repairs Gauteng`, `${b.name} truck mechanic`, `${b.name} truck service Johannesburg`, `${b.name} accident repairs`],
    alternates: { canonical: `/brands/${b.slug}` },
    openGraph: { title, description, url: `${SITE.url}/brands/${b.slug}`, images: [{ url: b.image }] },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const b = getBrand(slug)
  if (!b) notFound()
  const faqs = [
    { q: `Do you repair ${b.name} trucks?`, a: `Yes. Agents Diesel Services repairs and services ${b.name} trucks across Gauteng, including mechanical repairs, servicing, brakes, electrical faults and accident repairs.` },
    { q: `Can you do ${b.name} accident repairs and spray painting?`, a: "Yes. We do panel beating, cab and bumper repairs and full resprays. See our before and after photos for examples." },
    { q: `How do I get a quote for my ${b.name}?`, a: `Fill in the job card on this page. It opens in WhatsApp with your ${b.name} details ready to send. Add photos in the chat and we will come back with a quote.` },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `${b.name} truck repairs`, url: `${SITE.url}/brands/${b.slug}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "AdministrativeArea", name: "Gauteng" }, brand: { "@type": "Brand", name: b.name } }} />
      <PageHero crumbs={[{ name: "Brands", href: "/brands" }, { name: b.name, href: `/brands/${b.slug}` }]} title={`${b.name} truck repairs in Gauteng`} text={b.intro} image={{ src: b.image, alt: b.imageAlt }}>
        <CallButton />
        <WhatsAppButton message={`Hi Agents Diesel Services, I need a repair on my ${b.name} truck.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex items-center gap-6">
          <Image src={b.logo} alt={`${b.name} logo`} width={b.w} height={b.h} className="h-16 w-auto" />
          <h2 className="text-4xl font-bold md:text-5xl">What we do on {b.name} trucks</h2>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-lg font-medium transition hover:bg-ink hover:text-white">
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />{s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-5xl font-bold leading-[0.95] md:text-6xl">Send a job card for your {b.name}</h2>
          <JobCard defaultTruck={`${b.name} `} />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-5xl font-bold">{b.name} repairs: your questions</h2>
        <Faq items={faqs} />
      </section>
      <BrandStrip title="Other brands we work on" />
      <CtaBand />
    </>
  )
}
