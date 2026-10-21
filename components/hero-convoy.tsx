import { MovingImage } from "@/components/moving-image"

type P = { src: string; alt: string }
const colA: P[] = [
  { src: "/truck-agents-white-international-semi-truck.jpg", alt: "White International truck tractor ready for the road" },
  { src: "/truck-agents-volvo-heavy-duty-truck-engine.jpg", alt: "Volvo truck engine in the workshop" },
  { src: "/truck-agents-chrome-truck-wheel-tire.jpg", alt: "Chrome wheel on a heavy duty truck" },
  { src: "/truck-agents-ud-truck-cab-repair-restored-after.jpg", alt: "UD truck cab restored after repair" },
]
const colB: P[] = [
  { src: "/truck-agents-aluminum-diesel-fuel-tank.jpg", alt: "Aluminium diesel tank for a truck" },
  { src: "/truck-agents-orange-tipper-truck-trailer.jpg", alt: "Orange tipper trailer" },
  { src: "/truck-agents-mechanics-servicing-trucks-yard.jpg", alt: "Mechanics servicing trucks" },
  { src: "/truck-agents-truck-bed-rubberizing-after-coating.jpg", alt: "Truck bed with rubberized coating" },
]

function Column({ items, cls, offset }: { items: P[]; cls: string; offset: number }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative h-full overflow-hidden">
      <div className={`flex flex-col gap-4 ${cls}`}>
        {doubled.map((p, i) => (
          <MovingImage key={i} src={p.src} alt={i < items.length ? p.alt : ""} variant={i + offset} className="aspect-[3/4] w-full shrink-0 rounded-[2rem]" sizes="(min-width: 1024px) 22vw, 45vw" priority={i < 2} markWidth={52} />
        ))}
      </div>
    </div>
  )
}

export function HeroConvoy() {
  return (
    <div className="relative h-[460px] md:h-[620px]" aria-label="Agents Diesel Services workshop photos">
      <div className="grid h-full grid-cols-2 gap-4">
        <Column items={colA} cls="roll-up" offset={0} />
        <Column items={colB} cls="roll-down" offset={1} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-steel to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-steel to-transparent" />
    </div>
  )
}
