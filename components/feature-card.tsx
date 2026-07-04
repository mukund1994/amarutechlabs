import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
};

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <article className="glass gradient-border rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="grid size-12 place-items-center rounded-2xl bg-white text-brand-blue shadow-sm ring-1 ring-slate-200">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{children}</p>
    </article>
  );
}
