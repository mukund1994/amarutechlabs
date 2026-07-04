type PageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="pt-16">
      <section className="aurora border-b border-slate-200/70 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Amaru Tech Labs
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-8 text-slate-700 [&_a]:font-semibold [&_a]:text-brand-blue [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_p]:text-base [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6">
          {children}
        </div>
      </section>
    </main>
  );
}
