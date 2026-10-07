const PHONE = "(519) 716-2427";
const TEL = "tel:+15197162427";
const SMS = "sms:+15197162427";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Gageys%20Home%20Services&query_place_id=ChIJp5r-nTwR0yoRRutD6NfRm8s";

type IconName =
  | "phone" | "message" | "star" | "clock" | "pin" | "mower" | "spray" | "truck" | "deck" | "snow"
  | "sprout" | "brush" | "hammer" | "heart" | "handshake" | "zap" | "check" | "plus" | "arrow" | "home";

const paths: Record<IconName, React.ReactNode> = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  mower: <><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M4 15h16l-2-6H8L6 3H3" /><path d="M2 21h20" /></>,
  spray: <><path d="M3 7h5l2 3v11H3z" /><path d="M8 7V4h3" /><path d="M14 6h.01M17 4h.01M17 8h.01M20 6h.01M20 10h.01M20 2h.01" /></>,
  truck: <><path d="M3 5h11v11H3z" /><path d="M14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  deck: <><path d="M3 10h18M3 14h18M3 18h18" /><path d="M5 10V6M19 10V6M5 6h14" /></>,
  snow: <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M9 3l3 3 3-3M9 21l3-3 3 3M3 9l3 3-3 3M21 9l-3 3 3 3" />,
  sprout: <><path d="M7 20h10" /><path d="M12 20v-9" /><path d="M12 11C12 7 9 5 5 5c0 4 3 6 7 6zM12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5z" /></>,
  brush: <><path d="M18 2l4 4-9.5 9.5-4-4z" /><path d="M8.5 11.5 4 16c-1 1-1 3 0 4s3 1 4 0l4.5-4.5" /></>,
  hammer: <><path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9" /><path d="M17.6 15 22 10.6M20 8.5l-5.6-5.6c-1-1-2.6-1.2-3.8-.4L9 4l7 7 1.5-1.5" /></>,
  heart: <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />,
  handshake: <><path d="m11 17 2 2a1 1 0 0 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 0 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 0 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7 .9L21 7" /><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 0 0 3-3M3 4h8" /></>,
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  home: <><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></>,
};

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

const services: { icon: IconName; title: string; body: string; tag?: string }[] = [
  {
    icon: "mower",
    title: "Lawn Care & Grass Cutting",
    tag: "Most booked",
    body: "Regular mowing done with real attention to detail, so the lawn looks sharp every visit. Customers call the cut impeccable, week after week.",
  },
  {
    icon: "sprout",
    title: "Edging, Mulch & Garden Makeovers",
    body: "Crisp edges along walks and beds, fresh mulch, and full garden refreshes that make a tired front yard look cared for again.",
  },
  {
    icon: "spray",
    title: "Power Washing",
    body: "House exteriors and siding washed clean. A fast way to make the front of your home look years newer before guests arrive or a listing goes up.",
  },
  {
    icon: "truck",
    title: "Junk & Building-Waste Removal",
    body: "We haul away junk, yard debris and leftover building waste after a renovation, so you are not stuck with a pile at the side of the house.",
  },
  {
    icon: "hammer",
    title: "Demolition & Clean-Outs",
    body: "Tear-outs and clean-ups for sheds, old decks and cluttered spaces, including general cleaning so the area is ready for whatever comes next.",
  },
  {
    icon: "deck",
    title: "Deck Rebuilding",
    body: "Worn or unsafe deck? We rebuild it so you can use your backyard again. One lawn-care customer had Gage rebuild theirs too.",
  },
  {
    icon: "brush",
    title: "Exterior Painting",
    body: "Exterior painting to freshen up trim, fences and outdoor surfaces. Call to talk through what you need painted and when.",
  },
  {
    icon: "snow",
    title: "Snow Removal",
    body: "Driveways and walkways cleared through the winter, including last-minute storm help. Ask about setting up regular service before the first big snowfall.",
  },
];

const reviews = [
  {
    name: "Richard W.",
    job: "Emergency snow removal",
    text: "I live out of town and called in the middle of a snowstorm because my mother needed help. Gage changed his plans at the last minute and cleared all of it. I am setting up regular contract work with him.",
  },
  {
    name: "Jacquie W.",
    job: "Lawn, power washing & deck rebuild",
    text: "Gage has done several jobs for us now: cutting the lawn, power washing the front of the house, rebuilding our deck and hauling away the building waste.",
  },
  {
    name: "Desmond W.",
    job: "Lawn care",
    text: "Professional and punctual, and the grass cutting is always impeccable. You can tell he takes pride in his work.",
  },
  {
    name: "Evan R.",
    job: "Home service job",
    text: "Fast to respond and extremely diligent about finishing to the highest standard. We will be using him again.",
  },
  {
    name: "Nicole V.",
    job: "Home services",
    text: "Reliable and efficient, and he goes above and beyond to make sure the customer is happy.",
  },
  {
    name: "Tristan A.",
    job: "General work",
    text: "An honest, hard worker who takes great pride in what he does.",
  },
];

const steps = [
  { title: "Call or text Gage", body: `Reach Gage directly at ${PHONE}. Tell him what needs doing, whether it is a weekly lawn cut or a one-time clean-out.` },
  { title: "Quick quote", body: "Gage looks at the job, in person or from a few photos you text over, and gives you a straight price." },
  { title: "The work gets done", body: "He shows up when he says he will and works until the job meets his own high standard, not just yours." },
  { title: "Easy repeat service", body: "Most customers keep Gage on for the next job. Set up regular lawn or snow service and stop worrying about it." },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Kitchener and the surrounding area. If you are nearby and not sure whether you are in range, call or text and Gage will let you know.",
  },
  {
    q: "Do you offer weekly lawn cutting?",
    a: "Yes. Recurring lawn care is what most customers start with. Gage keeps the same standard every visit, which is why reviewers keep using the word impeccable.",
  },
  {
    q: "Can you help with snow removal in an emergency?",
    a: "Call right away. During one snowstorm Gage rearranged his day to clear the driveway for a customer's elderly mother. We cannot promise every last-minute request, but we will always try. Regular winter service is the surest way to be covered.",
  },
  {
    q: "I am out of town. Can you look after a parent's home?",
    a: "Yes, and families often do exactly that. You can arrange lawn cutting or snow clearing by phone for a parent or relative in Kitchener, and Gage will take care of it.",
  },
  {
    q: "Do you take away the junk and debris?",
    a: "Yes. Junk removal, yard debris and building waste can all be hauled away, either on their own or at the end of a demolition, deck or cleanup job.",
  },
  {
    q: "Can one company handle several jobs at my house?",
    a: "That is the idea. Lawn care, power washing, a deck rebuild and the clean-up afterward can all be done by one person you already trust, instead of four different contractors.",
  },
  {
    q: "When can I reach you?",
    a: `Gage starts at 8 a.m. Call or text ${PHONE}. If he is on a job, leave a message and he will get back to you quickly. Customers often mention his fast response.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gagey's Home Services",
  telephone: "+1-519-716-2427",
  areaServed: "Kitchener, ON",
  description:
    "Kitchener landscaping and home services company run by Gage: lawn care, demolition, cleaning, power washing, junk removal, deck rebuilds, snow removal and garden makeovers.",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "14" },
  hasMap: MAPS,
};

const nav = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

const ctaBtn =
  "inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-cta px-7 text-lg font-extrabold text-ink shadow-[0_8px_20px_-8px_oklch(0.6_0.15_70/0.7)] transition-[background-color,transform] duration-150 hover:bg-cta-hover active:scale-[0.97] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-deep";
const ghostBtn =
  "inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border-2 border-brand px-7 text-lg font-bold text-brand-dark transition-[background-color,transform] duration-150 hover:bg-brand-soft active:scale-[0.97] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Gagey's Home Services, home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white">
              <Icon name="home" className="h-6 w-6" />
            </span>
            <span className="text-xl font-black leading-none text-brand-deep">
              Gagey&rsquo;s<span className="block text-sm font-bold text-muted">Home Services</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-bold text-ink/80 transition-colors hover:text-brand">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden items-center gap-2 text-lg font-extrabold text-brand-deep md:flex">
              <Icon name="phone" className="h-5 w-5 text-brand" /> {PHONE}
            </a>
            <a href={TEL} className={`${ctaBtn} hidden !min-h-[46px] !px-5 !text-base md:inline-flex`}>Call Gage</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-full bg-cta text-ink md:hidden">
              <Icon name="phone" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-tint">
          <div aria-hidden="true" className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-soft" />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">
                <Icon name="heart" className="h-4 w-4" /> A father helping families in Kitchener
              </p>
              <h1 className="rise d1 text-[clamp(2.4rem,5.2vw,3.9rem)] font-black text-brand-deep">
                Lawn Care, Power Washing &amp; Snow Removal in Kitchener
              </h1>
              <p className="rise d2 mt-5 max-w-[58ch] text-xl text-ink/80">
                One honest, hard-working local pro for your yard and home. Gage cuts the grass, cleans up the mess, rebuilds the deck and clears the snow, and he takes pride in every job.
              </p>
              <div className="rise d3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className={ctaBtn}><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className={ghostBtn}><Icon name="message" className="h-5 w-5" /> Text Gage</a>
              </div>
              <div className="rise d3 mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-base font-semibold">
                <span className="flex items-center gap-2"><Stars /> <span className="font-black">5.0</span></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-brand/40 underline-offset-4 hover:decoration-brand">14 Google reviews</a>
                <span className="text-muted">&middot;</span>
                <span>Fast response</span>
                <span className="text-muted">&middot;</span>
                <span>Starts at 8 a.m.</span>
              </div>
            </div>

            <div className="rise d2 rounded-3xl bg-white p-7 shadow-[0_20px_50px_-20px_oklch(0.3_0.08_150/0.35)] ring-1 ring-line">
              <p className="text-sm font-extrabold text-brand">What Gage can take off your list</p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {["Grass cutting", "Power washing", "Junk removal", "Deck rebuilds", "Garden makeovers", "Snow removal"].map((s) => (
                  <li key={s} className="flex items-center gap-2 rounded-xl bg-tint px-3 py-2.5 text-base font-bold">
                    <Icon name="check" className="h-5 w-5 shrink-0 text-brand" /> {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <Stars className="h-4 w-4" />
                <p className="mt-2 text-base text-ink/85">&ldquo;Professional, punctual, and the grass cutting is always impeccable.&rdquo;</p>
                <p className="mt-1 text-sm font-bold text-muted">Desmond W., Google review</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why Kitchener homeowners hire Gage" className="bg-brand-deep text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, t: "5.0 stars", s: "14 Google reviews" },
              { icon: "handshake" as IconName, t: "Honest & reliable", s: "Straight answers, real effort" },
              { icon: "zap" as IconName, t: "Fast response", s: "Even in a snowstorm" },
              { icon: "heart" as IconName, t: "Family-run", s: "Owner Gage does the work" },
            ].map((b) => (
              <div key={b.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10"><Icon name={b.icon} className="h-6 w-6 text-cta" /></span>
                <div><p className="text-lg font-extrabold">{b.t}</p><p className="text-sm text-white/80">{b.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-[44rem]">
                <p className="font-extrabold text-brand">Services</p>
                <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">Yard and home services in Kitchener</h2>
                <p className="mt-4 text-ink/75">
                  Lawn care is where most customers start. Then they find out Gage can handle the power washing, the deck, the junk pile and the snow too. One call covers it.
                </p>
              </div>
              <a href={TEL} className={ghostBtn}>Ask about a job</a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`group relative flex flex-col rounded-2xl p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 ${
                    i === 0
                      ? "bg-brand text-white shadow-[0_18px_40px_-18px_oklch(0.4_0.12_150/0.7)] sm:col-span-2 lg:row-span-2"
                      : "border border-line bg-white hover:shadow-[0_14px_30px_-16px_oklch(0.3_0.08_150/0.35)]"
                  }`}
                >
                  {s.tag && <span className="absolute right-5 top-5 rounded-full bg-cta px-3 py-1 text-xs font-extrabold text-ink">{s.tag}</span>}
                  <span className={`grid place-items-center rounded-xl ${i === 0 ? "h-16 w-16 bg-white/15" : "h-12 w-12 bg-brand-soft text-brand"}`}>
                    <Icon name={s.icon} className={i === 0 ? "h-9 w-9" : "h-7 w-7"} />
                  </span>
                  <h3 className={`mt-5 font-extrabold ${i === 0 ? "text-3xl" : "text-xl text-brand-deep"}`}>{s.title}</h3>
                  <p className={`mt-2 flex-1 ${i === 0 ? "max-w-[40ch] text-lg text-white/90" : "text-base text-ink/75"}`}>{s.body}</p>
                  {i === 0 && (
                    <p className="mt-6 text-base text-white/90">
                      Recurring cuts, with edging and trimming so the whole yard looks finished.
                    </p>
                  )}
                  <a href={TEL} className={`mt-5 inline-flex items-center gap-1.5 font-extrabold ${i === 0 ? "text-cta" : "text-brand hover:text-brand-dark"}`}>
                    Call about this <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="font-extrabold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">Rated 5.0 from 14 Google reviews</h2>
                <p className="mt-4 text-ink/75">
                  Customers describe Gage as honest, punctual and diligent. Several have hired him again and again for different jobs around the house.
                </p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className={`${ghostBtn} mt-6 bg-white`}>Read all reviews on Google</a>

                <figure className="mt-10 rounded-3xl bg-brand p-7 text-white">
                  <Icon name="snow" className="h-8 w-8 text-cta" />
                  <blockquote className="mt-4 text-xl font-semibold leading-relaxed">&ldquo;{reviews[0].text}&rdquo;</blockquote>
                  <figcaption className="mt-5 text-base text-white/85"><strong className="text-white">{reviews[0].name}</strong> &middot; {reviews[0].job}</figcaption>
                </figure>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {reviews.slice(1).map((r) => (
                  <figure key={r.name} className="flex flex-col rounded-2xl border border-line bg-white p-6">
                    <Stars />
                    <blockquote className="mt-3 flex-1 text-base text-ink/90">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-4 border-t border-line pt-3 text-base">
                      <strong>{r.name}</strong>
                      <span className="block text-sm text-muted">{r.job} &middot; Google review</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-extrabold text-brand">About Gage</p>
              <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">A dad from Kitchener who treats your home like his own</h2>
              <div className="mt-6 space-y-4 text-ink/85">
                <p>
                  Gagey&rsquo;s Home Services is a landscaping and home services company based in Kitchener, run by Gage. His motto is simple: a father helping families. He knows what it is like to juggle work, kids and a house that always needs something done.
                </p>
                <p>
                  So he does the jobs you do not have time for, and he does them properly. Lawn cutting, power washing, deck rebuilds, demolition, junk removal, garden makeovers and snow clearing are all handled by one person who shows up on time and finishes to a high standard.
                </p>
                <p>
                  That is why customers stick with him. One family started with grass cutting, then had Gage power wash the house, rebuild the deck and haul away the building waste. Another, living out of town, trusts him to look after a parent&rsquo;s driveway in a storm.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "handshake" as IconName, t: "Honest from the first call", s: "Reviewers keep using the same word to describe him: honest." },
                { icon: "clock" as IconName, t: "Punctual", s: "Shows up when he says he will, every time." },
                { icon: "check" as IconName, t: "Takes pride in the work", s: "Finishes to his own high standard, not the bare minimum." },
                { icon: "zap" as IconName, t: "Quick to respond", s: "Fast replies, and last-minute help when it matters." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border-2 border-brand-soft bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white"><Icon name={d.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{d.t}</h3>
                  <p className="mt-1 text-base text-ink/75">{d.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <p className="font-extrabold text-brand">How it works</p>
            <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">Getting help is easy</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-cta text-xl font-black text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-base text-ink/75">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-extrabold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">Serving Kitchener and nearby</h2>
              <p className="mt-4 text-ink/75">
                Gage works on homes across Kitchener and the surrounding area. Close by but not sure? Call or text and ask.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Kitchener", "Surrounding area"].map((a) => (
                  <li key={a} className="flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 font-bold text-brand-deep">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <a href={TEL} className={`${ctaBtn} mt-8`}><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
            </div>
            <div className="overflow-hidden rounded-3xl ring-1 ring-line">
              <iframe
                title="Map of Kitchener, Ontario, the Gagey's Home Services service area"
                src="https://maps.google.com/maps?q=Kitchener%2C%20Ontario&output=embed"
                className="h-[360px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-4 md:px-6">
            <p className="font-extrabold text-brand">FAQ</p>
            <h2 className="mt-2 text-[clamp(2rem,3.8vw,3rem)] font-black text-brand-deep">Questions people ask Gage</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl bg-white ring-1 ring-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-extrabold text-brand-deep">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                      <Icon name="plus" className="chev h-5 w-5 transition-transform duration-200" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-base text-ink/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand py-16 text-white md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <h2 className="max-w-[22ch] text-[clamp(2.2rem,4.4vw,3.4rem)] font-black">Got a job around the house? Call Gage at {PHONE}</h2>
            <p className="mt-4 max-w-[56ch] text-xl text-white/90">Lawn, power washing, junk, deck or snow. Starts at 8 a.m. Call or text and he will get back to you fast.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={TEL} className={ctaBtn}><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 text-lg font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Icon name="message" className="h-5 w-5" /> Send a text
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-deep pb-28 pt-14 text-white/85 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="text-2xl font-black text-white">Gagey&rsquo;s Home Services</p>
            <p className="mt-3 max-w-[48ch] text-base">
              Lawn care, grass cutting, edging and mulch, garden makeovers, power washing, junk removal, demolition, cleaning, deck rebuilding, exterior painting and snow removal in Kitchener, ON.
            </p>
          </div>
          <div>
            <p className="font-extrabold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-base">
              <li><a href={TEL} className="hover:text-white">{PHONE}</a></li>
              <li><a href={SMS} className="hover:text-white">Text {PHONE}</a></li>
              <li>Starts at 8 a.m.</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Maps listing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-extrabold text-white">Service area</p>
            <ul className="mt-3 space-y-2 text-base">
              <li>Kitchener, ON</li>
              <li>Surrounding area</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] border-t border-white/15 px-4 pt-6 text-sm text-white/60 md:px-6">
          &copy; {new Date().getFullYear()} Gagey&rsquo;s Home Services. All rights reserved.
        </p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={TEL} className="flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-cta font-extrabold text-ink active:scale-[0.97]">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={SMS} className="flex min-h-[50px] items-center justify-center gap-2 rounded-full border-2 border-brand font-extrabold text-brand-dark active:scale-[0.97]">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
