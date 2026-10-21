# Agents Diesel Services Website

Next.js (App Router), TypeScript, Tailwind CSS v4. Static export.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in /out
```

## Change placeholders in one file
Phone, WhatsApp, email and domain: `lib/site.ts`. Also update the domain in `public/robots.txt`.

## Where things are
| What | Where |
| --- | --- |
| Services, SEO copy, before and after photos | `lib/services.ts` |
| Truck brands and logos | `lib/brands.ts` |
| Areas and job card problem list | `lib/areas.ts` |
| AI crawler files (llms.txt, llms-full.txt) | `lib/llms.ts` (built automatically from the data above) |
| Before and after slider | `components/before-after.tsx` |
| WhatsApp job card | `components/job-card.tsx` |
| Colours and animations | `app/globals.css` |

Add a service, brand or area by adding one entry to its file. The page, menus, footer, sitemap, schema and llms files update automatically.
