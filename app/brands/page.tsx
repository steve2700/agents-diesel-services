import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { BRANDS } from "@/lib/brands"

export const metadata: Metadata = {
  title: "Truck Brands We Repair: Isuzu, Hino, UD, Scania and Mazda",
  description: "Agents Diesel Services repairs and services Isuzu, Hino, UD Trucks, Scania and Mazda trucks across Gauteng. Mechanical repairs, accident repairs and spray painting.",
  alternates: { canonical: "/brands" },
}

export default function BrandsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Brands", href: "/brands" }]} title="Truck brands we repair" text="From light delivery trucks to heavy haulers, we work on the brands Gauteng operators run." image={{ src: "/truck-agents-white-international-semi-truck.jpg", alt: "Truck tractor ready for the road" }}>
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group rounded-[2rem] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Image src={b.logo} alt={`${b.name} logo`} width={b.w} height={b.h} className="h-16 w-auto" />
              <h2 className="mt-6 text-3xl font-semibold">{b.name} truck repairs</h2>
              <p className="mt-2 text-graphite">{b.intro}</p>
              <span className="mt-4 inline-block font-display text-xl font-semibold text-signal">Read more</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
