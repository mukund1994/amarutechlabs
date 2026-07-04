import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Clock3,
  Cpu,
  Gauge,
  Layers3,
  Mail,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";

const buildCards = [
  {
    icon: MonitorSmartphone,
    title: "Android Applications",
    text: "Native mobile experiences designed for speed, clarity, and everyday use."
  },
  {
    icon: Gauge,
    title: "Productivity Tools",
    text: "Focused utilities that help people complete common tasks with less friction."
  },
  {
    icon: Layers3,
    title: "Media Utilities",
    text: "Thoughtful tools for organizing, handling, and improving personal media workflows."
  },
  {
    icon: ShieldCheck,
    title: "Privacy-Focused Design",
    text: "Product decisions shaped around clear permissions and respectful data handling."
  },
  {
    icon: Rocket,
    title: "Future Innovation",
    text: "A growing product roadmap built around useful, polished Android software."
  }
];

const whyCards = [
  {
    icon: Sparkles,
    title: "Simple",
    text: "Interfaces are kept clear, focused, and easy to understand from the first use."
  },
  {
    icon: BadgeCheck,
    title: "Reliable",
    text: "Products are built with practical engineering choices and stable everyday behavior."
  },
  {
    icon: Cpu,
    title: "Modern",
    text: "Design, performance, and platform conventions are treated as core product details."
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden pt-16">
      <section className="aurora relative border-b border-slate-200/70 px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(16,24,40,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,24,40,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <MotionSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/74 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <Sparkles className="size-4 text-brand-blue" aria-hidden="true" />
              Building modern Android applications and digital utilities.
            </div>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Build software that is simple, reliable, fast, and thoughtfully designed.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              Amaru Tech Labs is a software studio creating polished Android applications,
              productivity tools, and digital utilities for everyday workflows.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@amarutech.co.nz"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              >
                Contact Support
                <Mail className="size-4" aria-hidden="true" />
              </a>
              <Link
                href="#development"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              >
                Coming Soon
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </MotionSection>

          <MotionSection
            className="relative mx-auto aspect-square w-full max-w-[560px]"
            aria-label="Abstract product illustration"
          >
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/18 via-white to-brand-mint/20 blur-2xl" />
            <div className="glass gradient-border absolute inset-0 rounded-[2rem] p-5 sm:p-7">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/65">
                <div className="absolute left-8 top-8 h-28 w-28 rounded-3xl bg-brand-blue/18" />
                <div className="absolute right-10 top-12 h-20 w-20 rounded-full bg-brand-coral/20" />
                <div className="absolute bottom-8 left-10 h-24 w-40 rounded-[2rem] bg-brand-mint/20" />
                <div className="absolute bottom-16 right-8 h-36 w-28 rounded-[2rem] bg-brand-violet/14" />
                <div className="absolute left-1/2 top-1/2 h-64 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                  <div className="mx-auto mt-4 h-1.5 w-14 rounded-full bg-slate-200" />
                  <div className="mx-5 mt-9 space-y-4">
                    <div className="h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-mint/20" />
                    <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                    <div className="h-3 w-full rounded-full bg-slate-100" />
                    <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      <div className="h-16 rounded-2xl bg-slate-50 ring-1 ring-slate-200" />
                      <div className="h-16 rounded-2xl bg-slate-50 ring-1 ring-slate-200" />
                    </div>
                  </div>
                </div>
                <div className="absolute left-12 top-36 rounded-2xl bg-white/80 p-3 shadow-glass ring-1 ring-slate-200 backdrop-blur">
                  <Blocks className="size-5 text-brand-blue" aria-hidden="true" />
                </div>
                <div className="absolute bottom-28 right-16 rounded-2xl bg-white/80 p-3 shadow-glass ring-1 ring-slate-200 backdrop-blur">
                  <Wrench className="size-5 text-brand-mint" aria-hidden="true" />
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <MotionSection className="px-5 py-24 sm:px-8" id="about">
        <SectionHeading eyebrow="About" title="A studio for polished everyday software">
          Amaru Tech Labs creates modern Android applications focused on productivity,
          media, and everyday utilities. We believe software should be fast, intuitive,
          and beautifully designed.
        </SectionHeading>
      </MotionSection>

      <MotionSection className="px-5 pb-24 sm:px-8" id="development">
        <div className="mx-auto max-w-5xl">
          <div className="glass gradient-border rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex max-w-3xl gap-5">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-200">
                  <Clock3 className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    Currently in Development
                  </h2>
                  <p className="mt-3 text-lg leading-8 text-muted">
                    Our first collection of Android applications is currently being prepared.
                    We look forward to sharing them soon.
                  </p>
                </div>
              </div>
              <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-50/80 px-5 py-24 sm:px-8" id="build">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What We Build" title="Useful tools with room to grow" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildCards.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title}>
                {card.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-24 sm:px-8" id="why">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Amaru Tech Labs" title="Designed with product discipline" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {whyCards.map((card) => (
              <FeatureCard key={card.title} icon={card.icon} title={card.title}>
                {card.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 sm:px-8" id="contact">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-ink p-8 text-white shadow-soft sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-mint">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Support for Amaru Tech Labs
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                For product questions or support requests, contact{" "}
                <a className="font-semibold text-white" href="mailto:support@amarutech.co.nz">
                  support@amarutech.co.nz
                </a>
                .
              </p>
            </div>
            <a
              href="mailto:support@amarutech.co.nz"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-mint/50"
            >
              Contact Support
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
