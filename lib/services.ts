export interface BeforeAfterItem {
  title: string
  before: string
  after: string
  ratio: string
  caption: string
  alt: string
}

export interface Service {
  slug: string
  name: string
  short: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  imageAlt: string
  headline: string
  intro: string
  includes: string[]
  signs: string[]
  faqs: { q: string; a: string }[]
  answer: string
  problem: string
  gallery?: BeforeAfterItem[]
  process?: { src: string; alt: string; caption: string }[]
}

export const BA_HINO: BeforeAfterItem = {
  title: "Hino accident repair",
  before: "/truck-agents-hino-truck-accident-repair-front-damage-before.jpg",
  after: "/truck-agents-hino-truck-accident-repair-panel-beating-after.jpg",
  ratio: "3 / 2",
  caption: "Hino truck with heavy front end damage, rebuilt with panel beating and paint.",
  alt: "Hino truck accident repair, front damage before and panel beating after",
}
export const BA_UD: BeforeAfterItem = {
  title: "UD cab and bumper repair",
  before: "/truck-agents-ud-truck-cab-repair-damaged-bumper-before.jpg",
  after: "/truck-agents-ud-truck-cab-repair-restored-after.jpg",
  ratio: "1 / 1",
  caption: "UD truck cab with a damaged bumper, restored and repainted.",
  alt: "UD truck cab repair, damaged bumper before and restored cab after",
}
export const BA_BED: BeforeAfterItem = {
  title: "Truck bed rubberizing",
  before: "/truck-agents-truck-bed-rubberizing-before-damaged.jpg",
  after: "/truck-agents-truck-bed-rubberizing-after-coating.jpg",
  ratio: "1 / 1",
  caption: "A worn, damaged truck bed, sanded and sprayed with a tough rubberized coating.",
  alt: "Truck bed rubberizing, damaged bed before and coated bed after",
}

export const SERVICES: Service[] = [
  {
    slug: "heavy-duty-truck-repairs",
    name: "Heavy Duty Truck Repairs",
    short: "Breakdowns, faults and full repairs on trucks and truck tractors of every make.",
    metaTitle: "Heavy Duty Truck Repairs in Gauteng",
    metaDescription:
      "Heavy duty truck repairs across Gauteng. Engines, gearboxes, brakes, electrical and suspension fixed by experienced truck mechanics. Call Now or send a WhatsApp job card.",
    keywords: ["heavy duty truck repairs Gauteng", "truck mechanic Johannesburg", "truck repair workshop Gauteng", "truck breakdown repairs"],
    image: "/heavy-duty-truck-repairs.jpg",
    imageAlt: "Heavy duty truck repairs in the Agents Diesel Services workshop in Gauteng",
    headline: "Heavy duty truck repairs that get you back on the road",
    intro:
      "When a truck stands still, the money stops. Agents Diesel Services repairs heavy duty trucks, truck tractors, rigid trucks and light commercial vehicles across Gauteng. We find the fault, give you a clear quote and fix it properly.",
    includes: [
      "Fault finding and diagnostics",
      "Engine, gearbox and diff repairs",
      "Brake, clutch and suspension repairs",
      "Electrical and wiring repairs",
      "Cooling system and turbo repairs",
      "Repairs on all major truck brands",
    ],
    signs: ["Loss of power or heavy smoke", "Overheating or leaking fluids", "Warning lights on the dash", "Hard gear changes or clutch slip", "Brakes pulling or feeling weak"],
    answer: "Agents Diesel Services repairs heavy duty trucks across Gauteng, including engines, gearboxes, brakes, electrical faults and suspension, and gives a clear quote before work starts.",
    problem: "Engine problem",
    faqs: [
      { q: "Which truck brands do you repair?", a: "We work on Isuzu, Hino, UD Trucks, Scania and Mazda, and on other major heavy duty and commercial brands used on South African roads. Send your truck make and model on the job card and we will confirm." },
      { q: "Can I get a quote before work starts?", a: "Yes. Send a WhatsApp job card with photos of the problem and we will come back with a clear quote before any work begins." },
      { q: "Which areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Pretoria, Centurion, Midrand, Germiston, Kempton Park, Boksburg and surrounds." },
    ],
  },
  {
    slug: "truck-engine-overhauls",
    name: "Truck Engine Overhauls",
    short: "Full diesel engine strip downs, rebuilds and overhauls for trucks.",
    metaTitle: "Truck Engine Overhauls and Rebuilds in Gauteng",
    metaDescription:
      "Truck engine overhauls and diesel engine rebuilds in Gauteng. Strip down, inspection, machining and rebuild for Isuzu, Hino, UD, Scania and more. Get a free quote.",
    keywords: ["truck engine overhaul Gauteng", "diesel engine rebuild Johannesburg", "Volvo truck engine repair", "truck engine reconditioning"],
    image: "/truck-agents-volvo-heavy-duty-truck-engine.jpg",
    imageAlt: "Volvo heavy duty truck engine ready for overhaul at Agents Diesel Services",
    headline: "Truck engine overhauls done properly",
    intro:
      "A tired engine costs you in fuel, downtime and breakdowns. We strip, inspect and rebuild heavy duty diesel engines so your truck earns again, and we explain what each part of the job costs before we start.",
    includes: [
      "Engine removal and refitting",
      "Full strip down and inspection",
      "Head, liner, piston and bearing work",
      "Turbo and injector refits",
      "Gasket sets, seals and fresh fluids",
      "Test run and final check",
    ],
    signs: ["Blue or black smoke", "Oil consumption going up", "Low compression or hard starting", "Knocking or unusual noises", "Coolant mixing with oil"],
    answer: "Agents Diesel Services overhauls and rebuilds heavy duty diesel truck engines in Gauteng, with full strip down, inspection and a clear quote before work begins.",
    problem: "Engine problem",
    faqs: [
      { q: "How long does an engine overhaul take?", a: "It depends on the engine and parts availability. After inspection we give you a realistic time frame on the quote." },
      { q: "Is an overhaul better than a replacement engine?", a: "It depends on the condition of the block and your budget. We inspect first and tell you which option makes sense." },
    ],
  },
  {
    slug: "gearbox-and-transmission-repairs",
    name: "Gearbox and Transmission Repairs",
    short: "Manual and automated truck gearbox repairs, rebuilds and replacements.",
    metaTitle: "Truck Gearbox and Transmission Repairs in Gauteng",
    metaDescription:
      "Truck gearbox and transmission repairs in Gauteng. Strip down, gear and bearing replacement, synchro repairs and rebuilds. Send a WhatsApp job card for a fast quote.",
    keywords: ["truck gearbox repairs Gauteng", "truck transmission repair Johannesburg", "gearbox rebuild trucks", "clutch and gearbox truck"],
    image: "/truck-agents-commercial-truck-transmission-unit.jpg",
    imageAlt: "Commercial truck transmission unit removed for gearbox repair",
    headline: "Gearbox and transmission repairs for trucks",
    intro:
      "Grinding gears, slipping drives and jumping out of gear all point to the gearbox. We remove, strip, repair and refit truck transmissions, and we show you the worn parts so you know exactly what was wrong.",
    includes: [
      "Gearbox removal and refitting",
      "Gear, bearing and synchro replacement",
      "Shaft and seal repairs",
      "Clutch and release bearing work",
      "Differential and propshaft checks",
      "Gearbox oil and filter service",
    ],
    signs: ["Grinding when changing gear", "Gearbox jumping out of gear", "Whining noise in drive", "Oil leaks at the gearbox", "Clutch slipping or sticking"],
    answer: "Agents Diesel Services repairs and rebuilds truck gearboxes and transmissions in Gauteng, replacing worn gears, bearings and synchros and refitting the unit.",
    problem: "Gearbox or clutch",
    faqs: [
      { q: "Can you repair a gearbox without replacing it?", a: "Often yes. We strip the unit, replace the worn gears and bearings and rebuild it. If it is beyond repair we tell you honestly." },
      { q: "Do you handle clutch replacements?", a: "Yes. Clutch work is usually done together with the gearbox so you only pay for the labour once." },
    ],
  },
  {
    slug: "truck-servicing-and-maintenance",
    name: "Truck Servicing and Maintenance",
    short: "Scheduled services and preventative maintenance to keep your fleet moving.",
    metaTitle: "Truck Servicing and Maintenance in Gauteng",
    metaDescription:
      "Truck servicing and fleet maintenance in Gauteng. Oil and filter services, safety checks and scheduled maintenance plans for owner drivers and fleets. Call Now for a quote.",
    keywords: ["truck service Gauteng", "fleet maintenance Johannesburg", "truck maintenance plans", "diesel truck service"],
    image: "/truck-agents-white-box-truck-engine-service.jpg",
    imageAlt: "White box truck on a lift during an engine service",
    headline: "Truck servicing and maintenance that prevents breakdowns",
    intro:
      "A planned service is cheaper than a breakdown on the N1. We service single trucks and whole fleets, and we keep a record of what was done so you always know when the next job is due.",
    includes: [
      "Oil, fuel and air filter services",
      "Greasing and fluid top ups",
      "Brake and tyre checks",
      "Belts, hoses and cooling checks",
      "Pre trip and roadworthy inspections",
      "Service records for fleet owners",
    ],
    signs: ["Service interval is due", "Fuel use is climbing", "Trip is coming up", "Roadworthy test is due", "New truck added to your fleet"],
    answer: "Agents Diesel Services services trucks and runs scheduled maintenance for owner drivers and fleets across Gauteng, so problems are caught before they cause a breakdown.",
    problem: "Service or maintenance",
    faqs: [
      { q: "Do you offer fleet maintenance plans?", a: "Yes. Tell us how many trucks you run and how far they travel and we will set up a service schedule that fits." },
      { q: "Can you service my truck at my yard?", a: "For selected jobs and areas, yes. Send a job card with your location and we will confirm what we can do." },
    ],
  },
  {
    slug: "truck-spray-painting-and-cab-repairs",
    name: "Truck Spray Painting and Cab Repairs",
    short: "Panel beating, cab repairs and full truck respraying in your fleet colours.",
    metaTitle: "Truck Spray Painting and Cab Repairs in Gauteng",
    metaDescription:
      "Truck spray painting, cab repairs and panel work in Gauteng. Full cab resprays, accident repairs and fleet colour matching. Send photos on WhatsApp for a free quote.",
    keywords: ["truck spray painting Gauteng", "truck cab respray", "commercial vehicle panel beating", "truck bodywork repairs"],
    image: "/truck-agents-ud-truck-cab-repair-restored-after.jpg",
    imageAlt: "UD truck cab repaired and repainted by Agents Diesel Services",
    headline: "Truck spray painting and cab repairs",
    intro:
      "A clean, well painted truck tells clients you run a serious business. We repair and respray cabs, bodies and panels, and we match your fleet colours so every truck looks the part.",
    includes: [
      "Full cab and body resprays",
      "Accident damage and panel repairs",
      "Surface prep, masking and primer",
      "Fleet colour matching",
      "Door, bumper and fibreglass repairs",
      "Clear coat and polish",
    ],
    signs: ["Faded or peeling paint", "Rust patches on the cab", "Accident damage", "New fleet branding", "Cracked fibreglass or bumpers"],
    gallery: [BA_UD],
    process: [
      { src: "/truck-agents-truck-cab-respraying-workshop.jpg", alt: "Truck cab masked and prepared for respraying", caption: "Masked and prepped" },
      { src: "/truck-agents-truck-cab-spray-painting-prep.jpg", alt: "Truck cab covered ready for spray painting", caption: "Ready for paint" },
    ],
    answer: "Agents Diesel Services repairs and respray truck cabs and bodies in Gauteng, including fleet colour matching, accident touch ups and full cab resprays.",
    problem: "Spray painting or cab repair",
    faqs: [
      { q: "Can you match my fleet colours?", a: "Yes. Send us the paint code or a clear photo and we will match it as closely as possible." },
      { q: "Can I get a quote from photos?", a: "Yes. Photos from a few angles on WhatsApp are usually enough for a first quote." },
    ],
  },
  {
    slug: "diesel-tank-fitting-and-fuel-system-repairs",
    name: "Diesel Tank Fitting and Fuel System Repairs",
    short: "Fuel tank fitting, repairs, injectors and fuel pumps for trucks.",
    metaTitle: "Diesel Tank Fitting and Fuel System Repairs in Gauteng",
    metaDescription:
      "Diesel tank fitting and truck fuel system repairs in Gauteng. Aluminium and steel tanks, injectors, fuel pumps and fuel leaks fixed fast. Call Now or WhatsApp us.",
    keywords: ["diesel tank fitting Gauteng", "truck fuel tank repairs", "injector and fuel pump repairs", "aluminium diesel tank truck"],
    image: "/truck-agents-aluminum-diesel-fuel-tank.jpg",
    imageAlt: "Aluminium diesel fuel tank with straps ready to fit on a truck",
    headline: "Diesel tank fitting and fuel system repairs",
    intro:
      "Fuel problems cost money every kilometre. We fit new and replacement diesel tanks, repair leaks and service the whole fuel system, from the tank to the injectors.",
    includes: [
      "Aluminium and steel tank fitting",
      "Tank brackets, straps and lines",
      "Fuel leak repairs",
      "Injector and fuel pump repairs",
      "Fuel filter and water separator service",
      "Bleeding and test run",
    ],
    signs: ["Diesel smell or visible leaks", "Hard starting or stalling", "Black smoke and low power", "Damaged or dented tank", "Water in the fuel"],
    answer: "Agents Diesel Services fits and repairs aluminium and steel diesel tanks and services truck fuel systems, including injectors and fuel pumps, across Gauteng.",
    problem: "Diesel tank or fuel system",
    faqs: [
      { q: "Can you fit a larger diesel tank?", a: "Yes. Tell us the truck model and the tank size you need and we will advise on fitment." },
      { q: "Do you repair injectors?", a: "Yes. We test and repair or replace injectors and fuel pumps as part of fuel system work." },
    ],
  },
  {
    slug: "trailer-axle-and-bearing-maintenance",
    name: "Trailer Axle and Bearing Maintenance",
    short: "Axle, hub and wheel bearing repairs for trailers and truck rear ends.",
    metaTitle: "Trailer Axle and Wheel Bearing Maintenance in Gauteng",
    metaDescription:
      "Trailer axle repairs and wheel bearing maintenance in Gauteng. Hubs, bearings, seals and brakes for trailers and trucks. Call Now or WhatsApp a job card for a quote.",
    keywords: ["trailer axle repairs Gauteng", "wheel bearing replacement truck", "trailer maintenance Johannesburg", "hub and brake repairs trailer"],
    image: "/truck-agents-trailer-axle-and-bearing-maintenance.webp",
    imageAlt: "Trailer axle hub and bearing parts laid out during maintenance",
    headline: "Trailer axle and bearing maintenance",
    intro:
      "Worn bearings and dry hubs end with a wheel off on the road. We strip, inspect, repack and replace axle and bearing components on trailers and truck rear ends before they let you down.",
    includes: [
      "Wheel bearing replacement",
      "Hub, seal and race repairs",
      "Axle straightening checks",
      "Trailer brake and drum work",
      "Suspension bush and spring repairs",
      "Repacking and greasing",
    ],
    signs: ["Hot hubs after a trip", "Grease leaking at the wheel", "Wheel wobble or noise", "Uneven tyre wear", "Brakes dragging on the trailer"],
    answer: "Agents Diesel Services maintains trailer axles, hubs and wheel bearings across Gauteng, preventing wheel failures with inspection, repacking and replacement.",
    problem: "Trailer axle or bearings",
    faqs: [
      { q: "How often should trailer bearings be checked?", a: "At every service and before long trips. Heavy loads and rough roads mean more frequent checks." },
      { q: "Do you work on superlink trailers?", a: "Yes. We repair and maintain axles and bearings on a range of trailers. Tell us the trailer type on your job card." },
    ],
  },
  {
    slug: "tipper-and-trailer-body-repairs",
    name: "Tipper and Trailer Body Repairs",
    short: "Repairs and fabrication for tipper bodies, flatbeds and trailers.",
    metaTitle: "Tipper and Trailer Body Repairs in Gauteng",
    metaDescription:
      "Tipper body, flatbed and trailer repairs in Gauteng. Welding, fabrication, hydraulics and floor repairs for tippers and trailers. Send a WhatsApp job card for a free quote.",
    keywords: ["tipper body repairs Gauteng", "flatbed truck repairs", "trailer body repairs Johannesburg", "truck welding and fabrication"],
    image: "/truck-agents-orange-tipper-truck-trailer.jpg",
    imageAlt: "Orange tipper trailer after body repairs and painting",
    headline: "Tipper and trailer body repairs",
    intro:
      "Your body earns the money, so it has to be sound. We weld, fabricate and repair tipper bodies, flatbeds and trailers, and we paint them so the repair lasts.",
    includes: [
      "Welding and fabrication",
      "Floor, side and tailgate repairs",
      "Hydraulic ram and hose repairs",
      "Flatbed and loadbed repairs",
      "Tail lifts, rails and guards",
      "Painting and protective coatings",
    ],
    signs: ["Cracks or worn floors", "Tailgate not sealing", "Slow or uneven tipping", "Damaged side rails", "Body paint and rust damage"],
    answer: "Agents Diesel Services repairs tipper bodies, flatbeds and trailers in Gauteng, including welding, fabrication, hydraulics and protective painting.",
    problem: "Tipper or body repair",
    faqs: [
      { q: "Can you repair hydraulic tipping systems?", a: "Yes. We repair rams, hoses and valves as part of tipper body work." },
      { q: "Do you do custom fabrication?", a: "Yes. Send us the details and photos and we will quote on the fabrication." },
    ],
  },
  {
    slug: "truck-wheel-tyre-and-brake-repairs",
    name: "Truck Wheel, Tyre and Brake Repairs",
    short: "Wheel, hub, tyre and brake work to keep loaded trucks safe.",
    metaTitle: "Truck Wheel, Tyre and Brake Repairs in Gauteng",
    metaDescription:
      "Truck wheel, tyre and brake repairs in Gauteng. Brake relines, drums, air brake systems, hubs and wheel alignment checks. Call Now for fast truck brake repairs.",
    keywords: ["truck brake repairs Gauteng", "air brake repairs trucks", "truck wheel and hub repairs", "truck tyre and wheel Johannesburg"],
    image: "/truck-agents-chrome-truck-wheel-tire.jpg",
    imageAlt: "Chrome truck wheel and tyre on a heavy duty truck",
    headline: "Truck wheel, tyre and brake repairs",
    intro:
      "Brakes and wheels carry the most risk on a loaded truck. We inspect, repair and replace brake and wheel components so your truck stops straight and rolls true.",
    includes: [
      "Brake relining and drum work",
      "Air brake lines, valves and chambers",
      "Wheel hub and stud repairs",
      "Tyre fitting and rotation",
      "Brake balance checks",
      "Roadworthy preparation",
    ],
    signs: ["Brake pedal feels soft", "Air leaks when parked", "Truck pulls to one side", "Vibration at speed", "Worn or damaged tyres"],
    answer: "Agents Diesel Services repairs truck brakes, wheels, hubs and air brake systems in Gauteng and prepares trucks for roadworthy tests.",
    problem: "Brakes",
    faqs: [
      { q: "Can you prepare my truck for a roadworthy?", a: "Yes. We check and repair the items that matter for the test so your truck is ready to pass." },
      { q: "Do you repair air brake systems?", a: "Yes. We repair valves, lines, chambers and compressors on air brake systems." },
    ],
  },
  {
    slug: "truck-accident-repairs-and-panel-beating",
    name: "Truck Accident Repairs and Panel Beating",
    short: "Front end rebuilds, cab repairs and panel beating after accidents.",
    metaTitle: "Truck Accident Repairs and Panel Beating in Gauteng",
    metaDescription:
      "Truck accident repairs and panel beating in Gauteng. Front end damage, cab repairs, bumpers and full resprays for Hino, UD, Isuzu and more. See before and after photos and get a quote.",
    keywords: ["truck accident repairs Gauteng", "truck panel beating Johannesburg", "Hino accident repair", "UD truck cab repair", "commercial vehicle collision repair"],
    image: "/truck-agents-hino-truck-accident-repair-panel-beating-after.jpg",
    imageAlt: "Hino truck after accident repair and panel beating in Gauteng",
    headline: "Truck accident repairs and panel beating",
    intro:
      "An accident does not have to end a truck. We rebuild damaged fronts, repair cabs and bumpers, straighten panels and repaint, so the truck goes back to work looking right. Look at the before and after photos below.",
    includes: [
      "Front end and cab rebuilds",
      "Panel beating and straightening",
      "Bumper, grille and light repairs",
      "Fibreglass and body filler work",
      "Full cab and body resprays",
      "Quotes from photos for insurers and owners",
    ],
    signs: ["Front end or cab damage", "Cracked or missing bumper", "Dented doors and panels", "Insurance quote needed", "Truck needs to look right for clients"],
    answer: "Agents Diesel Services rebuilds and repairs accident damaged trucks in Gauteng, including Hino and UD cabs, with panel beating, bumper repairs and full resprays. Send photos on WhatsApp for a quote.",
    problem: "Accident damage or panel beating",
    gallery: [BA_HINO, BA_UD],
    faqs: [
      { q: "Can you repair a truck with heavy front damage?", a: "Yes. We have rebuilt Hino trucks with serious front end damage. Send photos from a few angles and we will tell you what is possible and what it costs." },
      { q: "Do you work with insurance quotes?", a: "Yes. We can provide a written quote from photos or after inspection that you can send to your insurer." },
      { q: "Will the paint match?", a: "We match the cab colour as closely as possible, and for fleets we can match your fleet colour code." },
    ],
  },
  {
    slug: "truck-bed-rubberizing",
    name: "Truck Bed Rubberizing",
    short: "Tough sprayed rubber coating for bakkie and truck beds.",
    metaTitle: "Truck Bed Rubberizing and Bed Liner Coating in Gauteng",
    metaDescription:
      "Truck bed rubberizing and spray on bed liner coating in Gauteng. Repair, sand and coat damaged truck beds for a tough, non slip finish. See before and after photos and get a free quote.",
    keywords: ["truck bed rubberizing Gauteng", "bakkie bed liner Johannesburg", "spray on bed liner", "truck bed coating", "rubberized truck bed"],
    image: "/truck-agents-truck-bed-rubberizing-after-coating.jpg",
    imageAlt: "Truck bed after rubberized coating by Agents Diesel Services",
    headline: "Truck bed rubberizing that protects your load bed",
    intro:
      "A worn, rusty or damaged bed loses value fast. We repair the bed, sand and prepare the surface, then spray a tough rubberized coating that grips loads, resists scratches and keeps water out.",
    includes: [
      "Bed repair and rust treatment",
      "Full sanding and surface prep",
      "Rubberized spray coating",
      "Non slip, scratch resistant finish",
      "Bakkie and light truck beds",
      "Fleet bed protection",
    ],
    signs: ["Rust or bare metal in the bed", "Deep scratches and dents", "Loads sliding around", "New truck needs protection", "Resale value is dropping"],
    answer: "Agents Diesel Services repairs, sands and sprays a rubberized coating on bakkie and truck beds in Gauteng for a tough, non slip, scratch resistant finish.",
    problem: "Bed liner or rubberizing",
    gallery: [BA_BED],
    process: [
      { src: "/truck-agents-truck-bed-rubberizing-before-damaged.jpg", alt: "Damaged truck bed before rubberizing", caption: "Damaged bed" },
      { src: "/truck-agents-truck-bed-rubberizing-prep-sanding.jpg", alt: "Truck bed sanded and prepared for rubberized coating", caption: "Sanded and prepped" },
      { src: "/truck-agents-truck-bed-rubberizing-after-coating.jpg", alt: "Finished rubberized truck bed", caption: "Coated and finished" },
    ],
    faqs: [
      { q: "How long does bed rubberizing take?", a: "It depends on the condition of the bed. We repair and sand first, then spray. We give you a time frame with your quote." },
      { q: "Can you rubberize a damaged bed?", a: "Yes. We repair damage and treat rust first so the coating bonds well and lasts." },
      { q: "Do you coat fleet trucks?", a: "Yes. Tell us how many trucks you have and we will quote for the fleet." },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
