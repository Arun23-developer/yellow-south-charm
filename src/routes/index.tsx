import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  BedDouble,
  Images,
  ConciergeBell,
  UtensilsCrossed,
  CalendarHeart,
  Phone,
  Mail,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import culinary from "@/assets/culinary.jpg";
import room from "@/assets/room.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manjal Hotels & Restaurant — Authentic South Indian Hospitality, Colombo" },
      {
        name: "description",
        content:
          "Manjal Hotels & Restaurant brings the vibrant flavors of Tirunelveli to the heart of Colombo. Dine, stay and celebrate in warm, premium South Indian hospitality.",
      },
      { property: "og:title", content: "Manjal Hotels & Restaurant" },
      {
        property: "og:description",
        content: "Authentic South Indian cuisine and premium stays in the heart of Colombo.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Get Directions", href: "#directions" },
  { label: "Prebook Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-ink font-display text-xl font-bold">
              M
            </span>
            <span className="font-display text-xl tracking-wide">
              Manjal Hotels & Restaurant
            </span>
          </a>
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="relative text-sm font-medium text-white/85 transition hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#rooms"
            className="hidden lg:inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition hover:scale-105"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden bg-ink px-6 pb-6 animate-fade-in-slow">
            <ul className="flex flex-col gap-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={n.href}
                    className="block text-white/90 hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <a
                href="#rooms"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full gradient-gold px-5 py-3 text-sm font-semibold text-ink"
              >
                Book Now
              </a>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="Manjal Restaurant interior in Colombo"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
          <span className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tirunelveli to Colombo · Est. Hospitality
          </span>
          <h1
            className="animate-fade-up mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            Welcome to <span className="text-gold italic">Manjal Hotels and Restaurant</span>
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: "260ms" }}
          >
            Discover the vibrant flavors of South India at Manjal Hotels and
            Restaurant, where tradition meets culinary excellence. Located in
            the heart of Colombo, we bring you authentic dishes crafted by
            skilled chefs from Tirunelveli — ensuring every bite is rich in
            heritage and taste.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#rooms"
              className="group inline-flex items-center gap-3 rounded-full gradient-gold px-7 py-4 text-sm font-semibold text-ink shadow-gold transition hover:scale-105"
            >
              Prebook Your Stay
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#culinary"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink"
            >
              Explore Menu
            </a>
          </div>

          <div
            className="animate-fade-up mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8"
            style={{ animationDelay: "560ms" }}
          >
            {[
              ["25+", "Years Heritage"],
              ["120+", "Signature Dishes"],
              ["4.9★", "Guest Rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-gold sm:text-4xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULINARY */}
      <section id="culinary" className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl gradient-gold opacity-30 blur-2xl" />
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={culinary}
                alt="South Indian thali on banana leaf"
                loading="lazy"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Our Kitchen
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Our Culinary <em className="text-gold not-italic">Excellence</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Indulge in the vibrant and aromatic flavors of South India,
              crafted with handpicked ingredients and time-honored recipes
              passed down through generations of Tirunelveli kitchens.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Stone-ground spice blends, every morning",
                "Banana-leaf thalis & wood-fired biryanis",
                "Authentic filter coffee, brewed in brass",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-gold" />
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              What We Offer
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Crafted for Every <em className="text-gold not-italic">Occasion</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: UtensilsCrossed,
                title: "Dining Experience",
                text: "Immerse in authentic South Indian flavors served in a warm, elegant setting.",
              },
              {
                icon: BedDouble,
                title: "Room Booking",
                text: "Premium, restful rooms designed for travelers, families and long stays.",
              },
              {
                icon: CalendarHeart,
                title: "Events & Catering",
                text: "From intimate gatherings to grand celebrations, catered with heritage flair.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-2 hover:shadow-elegant">
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-gold transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-gold text-ink shadow-gold">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                <Images className="mr-2 inline h-4 w-4" /> Gallery
              </span>
              <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
                A Taste of <em className="text-gold not-italic">Manjal Hotels and Restaurant</em>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Step into our world — the warmth of our kitchens, the elegance of
              our rooms, the joy on every plate.
            </p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
            {[
              { src: g1, span: "md:col-span-1 md:row-span-2", alt: "Dosa" },
              { src: g4, span: "md:col-span-2", alt: "Dining hall" },
              { src: g5, span: "md:col-span-1", alt: "Filter coffee" },
              { src: g3, span: "md:col-span-2", alt: "Biryani" },
              { src: g2, span: "md:col-span-1", alt: "Hotel room" },
              { src: g6, span: "md:col-span-1", alt: "Event hall" },
            ].map((img, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Prebook Rooms
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Stay in <em className="text-gold not-italic">Comfort</em>,
              <br /> Wake to South Indian Aromas
            </h2>
            <p className="mt-6 max-w-lg text-white/75">
              Our rooms blend modern luxury with the warmth of home — premium
              linen, calming light, marble bathrooms, and the legendary Manjal Hotels and Restaurant
              breakfast waiting downstairs.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                ["King Bed", ""],
                ["24×7 Service", ""],
                ["Free Wi-Fi", ""],
              ].map(([t]) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-center text-xs font-medium text-white/85"
                >
                  {t}
                </div>
              ))}
            </div>
            <a
              href="#cta"
              className="mt-10 inline-flex items-center gap-3 rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-ink shadow-gold transition hover:scale-105"
            >
              Prebook Now <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={room}
                alt="Luxury hotel room at Manjal"
                loading="lazy"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-6 py-4 text-ink shadow-elegant sm:block">
              <div className="font-display text-3xl text-gold">LKR 18,500</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                per night · all taxes
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              Loved by Guests
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Stories from Our <em className="text-gold not-italic">Table</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The filter coffee transported me home. Service felt like family.",
                name: "Anitha R.",
                role: "Chennai",
              },
              {
                quote:
                  "Best biryani in Colombo, hands down. The room was spotless and warm.",
                name: "Mohamed F.",
                role: "Colombo",
              },
              {
                quote:
                  "We hosted our engagement here. Everything was elegant and effortless.",
                name: "Priya & Karthik",
                role: "Jaffna",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:shadow-elegant">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-display text-xl leading-snug text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-semibold text-ink">{t.name}</span> ·{" "}
                    {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              <MapPin className="mr-2 inline h-4 w-4" /> Find Us
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Visit Us in the <em className="text-gold not-italic">Heart of Colombo</em>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              We're a short stroll from Galle Face — easy to reach by car, tuk,
              or on foot. Doors open daily, breakfast to late dinner.
            </p>
            <dl className="mt-8 space-y-4 text-ink">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <dt className="text-sm font-semibold">Address</dt>
                  <dd className="text-muted-foreground">
                    42 Galle Road, Colombo 03, Sri Lanka
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ConciergeBell className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <dt className="text-sm font-semibold">Hours</dt>
                  <dd className="text-muted-foreground">
                    7:00 AM – 11:30 PM · Open all days
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <dt className="text-sm font-semibold">Reservations</dt>
                  <dd className="text-muted-foreground">+94 11 234 5678</dd>
                </div>
              </div>
            </dl>
            <a
              href="https://maps.google.com/?q=Colombo+Sri+Lanka"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-ink/90"
            >
              Open Location <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Manjal Hotels and Restaurant Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.83%2C6.91%2C79.87%2C6.94&layer=mapnik"
                className="h-[460px] w-full"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-3xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32"
      >
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold blur-[120px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight sm:text-6xl">
              Ready to experience{" "}
              <em className="text-gold not-italic">authentic flavors</em> and
              premium comfort?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/70">
              Reserve a table or prebook your stay — and let Manjal Hotels and Restaurant welcome you
              with the warmth of South India.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#rooms"
                className="inline-flex items-center gap-3 rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-ink shadow-gold transition hover:scale-105"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#culinary"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Explore Menu
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-ink font-display text-xl font-bold">
                M
              </span>
              <span className="font-display text-xl">Manjal Hotels & Restaurant</span>
            </div>
            <p className="mt-5 max-w-sm text-sm">
              Authentic South Indian hospitality, brought from Tirunelveli to
              the heart of Colombo.
            </p>
          </div>
          <div>
            <h4 className="font-display text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-gold transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> +94 11 234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" /> hello@manjal.lk
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> Galle Road, Colombo 03
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 md:flex-row lg:px-10">
            <p>© 2026 Manjal Hotels and Restaurant. All rights reserved.</p>
            <p>Crafted with warmth in Colombo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
