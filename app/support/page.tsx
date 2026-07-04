import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact Amaru Tech Labs support."
};

export default function SupportPage() {
  return (
    <PageShell
      title="Support"
      description="For product questions, support requests, or general assistance, contact Amaru Tech Labs by email."
    >
      <section className="glass gradient-border rounded-3xl p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2>Contact Support</h2>
            <p className="mt-3">
              Send support requests to{" "}
              <a href="mailto:support@amarutech.co.nz">support@amarutech.co.nz</a>.
              Include the product name and a clear description of the issue when
              applicable.
            </p>
          </div>
          <a
            href="mailto:support@amarutech.co.nz"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white no-underline shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
          >
            Email Support
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section>
        <h2>Response Information</h2>
        <p>
          Amaru Tech Labs reviews support messages sent to the address above. Current
          products are under development, so product-specific support information will
          expand as applications become available.
        </p>
      </section>
    </PageShell>
  );
}
