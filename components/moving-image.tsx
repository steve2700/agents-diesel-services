import Image from "next/image"

const drifts = ["drift-a", "drift-b", "drift-c"]

/** A photo with a slow camera drift and the Agents Diesel mark stamped in the corner. */
export function MovingImage({
  src, alt, className = "", sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false, variant = 0, mark = true, markWidth = 58,
}: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean; variant?: number; mark?: boolean; markWidth?: number }) {
  return (
    <div className={`relative isolate overflow-hidden bg-graphite ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${drifts[variant % 3]}`} />
      {mark && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <Image src="/logo-mark.svg" alt="" width={markWidth} height={Math.round(markWidth * 0.48)} className="pointer-events-none absolute bottom-3 right-3 drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]" />
        </>
      )}
    </div>
  )
}
