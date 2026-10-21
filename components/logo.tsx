import Image from "next/image"
import Link from "next/link"

export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const text = tone === "dark" ? "text-white" : "text-ink"
  const sub = tone === "dark" ? "text-silver" : "text-graphite"
  return (
    <Link href="/" aria-label="Agents Diesel Services home" className={`group flex items-center gap-3 ${className}`}>
      <Image src="/logo-mark.svg" alt="" width={74} height={36} priority className="h-7 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-9" />
      <span className="h-7 w-px bg-signal sm:h-9" aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap font-display text-lg font-bold tracking-[0.1em] sm:text-xl xl:text-2xl ${text}`}>
          AGENTS DIESEL<span className="hidden sm:inline"> SERVICES</span>
        </span>
        <span className={`mt-1 hidden text-[11px] font-medium tracking-wide sm:block ${sub}`}>Repairs, Services &amp; Maintenance</span>
      </span>
    </Link>
  )
}
