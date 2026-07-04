import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using Amaru Tech Labs websites and upcoming products."
};

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description="These terms describe the basic conditions for using Amaru Tech Labs websites, support channels, and future digital products."
    >
      <section>
        <h2>Use of Services</h2>
        <p>
          You may use Amaru Tech Labs websites and products only for lawful purposes
          and in a way that does not interfere with their operation or availability.
        </p>
      </section>

      <section>
        <h2>Products in Development</h2>
        <p>
          Our first Android applications are currently being prepared. Features,
          availability, and product terms may change before public release.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          Amaru Tech Labs owns its branding, website content, product designs, and
          software unless otherwise stated. You may not copy or redistribute them
          without permission.
        </p>
      </section>

      <section>
        <h2>No Warranty</h2>
        <p>
          The website and any information provided through it are offered as
          available. We work to keep information accurate, but we do not guarantee
          uninterrupted access or error-free content.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For questions about these terms, contact{" "}
          <a href="mailto:support@amarutech.co.nz">support@amarutech.co.nz</a>.
        </p>
      </section>
    </PageShell>
  );
}
