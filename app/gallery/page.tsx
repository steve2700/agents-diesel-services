import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { BeforeAfter } from "@/components/before-after"
import { BA_HINO, BA_UD, BA_BED } from "@/lib/services"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Truck Repair Gallery",
  description: "Photos from the Agents Diesel Services workshop: engine overhauls, gearbox repairs, spray painting, diesel tank fitting, trailer axles and tipper bodies in Gauteng.",
  alternates: { canonical: "/gallery" },
}

const photos: [string, string][] = [
  ["/truck-agents-hino-truck-accident-repair-panel-beating-after.jpg", "Hino truck after accident repair"],
  ["/truck-agents-ud-truck-cab-repair-restored-after.jpg", "UD truck cab restored after repair"],
  ["/truck-agents-truck-bed-rubberizing-after-coating.jpg", "Truck bed with rubberized coating"],
  ["/truck-agents-truck-bed-rubberizing-prep-sanding.jpg", "Truck bed sanded before rubberizing"],
  ["/truck-agents-white-international-semi-truck.jpg", "White International truck tractor"],
  ["/truck-agents-volvo-heavy-duty-truck-engine.jpg", "Volvo heavy duty truck engine"],
  ["/truck-agents-aluminum-diesel-fuel-tank.jpg", "Aluminium diesel fuel tank"],
  ["/truck-agents-orange-tipper-truck-trailer.jpg", "Orange tipper trailer"],
  ["/truck-agents-chrome-truck-wheel-tire.jpg", "Chrome truck wheel and tyre"],
  ["/truck-agents-truck-diesel-tank-fitting.jpg", "Diesel tank fitted to a truck"],
  ["/truck-agents-mechanics-servicing-trucks-yard.jpg", "Mechanics servicing trucks in the yard"],
  ["/truck-agents-flatbed-truck-transport-equipment.jpg", "Flatbed truck transporting equipment"],
  ["/heavy-duty-truck-repairs.jpg", "Heavy duty truck repairs in the workshop"],
  ["/heavy_duty_truck_repairs.jpg", "Truck with the cab tilted for engine access"],
  ["/heavy-truck-repairs-shop.jpg", "Heavy truck on the lift"],
  ["/truck-agents-blue-semi-truck-repair-shop.jpg", "Blue truck tractor under repair"],
  ["/truck-agents-white-box-truck-engine-service.jpg", "White box truck engine service"],
  ["/truck-agents-truck-cab-respraying-workshop.jpg", "Truck cab respraying"],
  ["/truck-agents-truck-cab-spray-painting-prep.jpg", "Truck cab spray painting preparation"],
  ["/truck-agents-commercial-truck-cab-bodywork.jpg", "Commercial truck cab bodywork"],
  ["/truck-agents-commercial-truck-transmission-unit.jpg", "Commercial truck transmission unit"],
  ["/truck-agents-heavy-duty-gearbox-internal-gears.jpg", "Heavy duty gearbox internal gears"],
  ["/truck-agents-heavy-duty-engine-overhaul-workshop.jpg", "Engine overhaul in the workshop"],
  ["/truck-agents-transmission-loaded-on-pickup-truck.jpg", "Transmission loaded on a bakkie"],
  ["/truck-agents-trailer-axle-and-bearing-maintenance.webp", "Trailer axle and bearing maintenance"],
]

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Gallery", href: "/gallery" }]} title="Work from our workshop" image={{ src: "/truck-agents-hino-truck-accident-repair-panel-beating-after.jpg", alt: "Hino truck after accident repair" }} text="Real trucks, real repairs. Every job here came in on a job card.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-5xl font-bold md:text-6xl">Before and after</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <BeforeAfter item={BA_HINO} />
            <BeforeAfter item={BA_UD} />
            <BeforeAfter item={BA_BED} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map(([src, alt], i) => (
            <MovingImage key={src} src={src} alt={alt} variant={i} className={`mb-5 break-inside-avoid rounded-[2rem] ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
