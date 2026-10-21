"use client"

import { useEffect, useMemo, useState } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { AREAS, PROBLEMS } from "@/lib/areas"
import { WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-2 border-chrome/40 bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-signal focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-lg font-medium transition active:scale-95 ${on ? "border-signal bg-signal text-white" : "border-chrome/40 bg-white text-ink hover:border-ink"}`

export function JobCard({ defaultProblem = "", defaultArea = "", defaultTruck = "" }: { defaultProblem?: string; defaultArea?: string; defaultTruck?: string }) {
  const [problem, setProblem] = useState(defaultProblem)
  const [truck, setTruck] = useState(defaultTruck)
  const [status, setStatus] = useState<"Broken down" | "Still driving">("Broken down")
  const [area, setArea] = useState(defaultArea)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("")
  const [ref, setRef] = useState("ADS000000")

  useEffect(() => setRef(`ADS${Math.floor(100000 + Math.random() * 900000)}`), [])

  const ready = problem && truck.trim() && name.trim()

  const message = useMemo(() => {
    const lines = [
      "*AGENTS DIESEL SERVICES JOB CARD*",
      `Ref: ${ref}`,
      `Name: ${name.trim() || "..."}`,
      `Truck: ${truck.trim() || "..."}`,
      `Problem: ${problem || "..."}`,
      `Status: ${status}`,
      `Location: ${area || "Not given"}`,
    ]
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    if (details.trim()) lines.push(`Details: ${details.trim()}`)
    lines.push("", "I will send photos in this chat.")
    return lines.join("\n")
  }, [ref, name, truck, problem, status, area, phone, details])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="job-card" className="grid scroll-mt-28 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[2rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className="font-display text-2xl font-semibold">What is wrong?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {PROBLEMS.map((p) => (
              <button key={p} type="button" aria-pressed={problem === p} onClick={() => setProblem(p)} className={chip(problem === p)}>{p}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="font-display text-2xl font-semibold">Truck make and model</span>
            <input className={`${field} mt-2`} value={truck} onChange={(e) => setTruck(e.target.value)} placeholder="Volvo FH 440, Isuzu FTR 850" autoComplete="off" />
          </label>
          <label className="block">
            <span className="font-display text-2xl font-semibold">Where is the truck?</span>
            <select className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Choose an area</option>
              {AREAS.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
              <option value="Other Gauteng area">Other Gauteng area</option>
            </select>
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="font-display text-2xl font-semibold">Can it still drive?</legend>
          <div className="mt-3 flex gap-2">
            {(["Broken down", "Still driving"] as const).map((s) => (
              <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={chip(status === s)}>{s}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="font-display text-2xl font-semibold">Your name</span>
            <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name and company" autoComplete="name" />
          </label>
          <label className="block">
            <span className="font-display text-2xl font-semibold">Best number to call</span>
            <input className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" inputMode="tel" autoComplete="tel" />
          </label>
        </div>

        <label className="mt-6 block">
          <span className="font-display text-2xl font-semibold">Anything else we should know?</span>
          <textarea className={`${field} mt-2 h-24 py-3`} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Noises, warning lights, when it started" />
        </label>

        <button type="button" onClick={send} disabled={!ready} className="mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] font-display text-2xl font-semibold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-chrome/40 disabled:text-graphite/70">
          <WhatsAppIcon className="h-7 w-7" />
          Send job card on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-graphite">
          {ready ? "WhatsApp opens with your job card ready to send. Add photos in the chat." : "Pick the problem, add your truck and your name to send."}
        </p>
      </div>

      {/* Live ticket preview */}
      <aside aria-label="Job card preview" className="relative hidden self-start lg:block">
        <div className="relative rounded-[2rem] border-2 border-dashed border-silver/50 bg-graphite p-7 text-white">
          <span aria-hidden="true" className="absolute -left-3 top-24 h-6 w-6 rounded-full bg-ink" />
          <span aria-hidden="true" className="absolute -right-3 top-24 h-6 w-6 rounded-full bg-ink" />
          <div className="flex items-baseline justify-between">
            <p className="font-display text-3xl font-bold tracking-wider">JOB CARD</p>
            <p className="font-display text-xl text-signal">{ref}</p>
          </div>
          <dl className="mt-10 space-y-4 text-lg">
            {[["Name", name], ["Truck", truck], ["Problem", problem], ["Status", status], ["Location", area], ["Call me on", phone], ["Details", details]].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-white/10 pb-3">
                <dt className="w-24 shrink-0 text-silver">{k}</dt>
                <dd className={`min-w-0 break-words ${v ? "text-white" : "text-white/30"}`}>{v || "Waiting"}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-silver">This is exactly what lands in our WhatsApp.</p>
        </div>
      </aside>
    </div>
  )
}
