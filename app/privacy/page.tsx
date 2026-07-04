import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Amaru Tech Labs products and support."
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="This page explains how Amaru Tech Labs approaches privacy for its website, upcoming Android applications, and support communications."
    >
      <section>
        <h2>Overview</h2>
        <p>
          Amaru Tech Labs is preparing modern Android applications and digital
          utilities. We aim to collect only the information needed to provide,
          maintain, and support our products.
        </p>
      </section>

      <section>
        <h2>Information You Provide</h2>
        <p>
          If you contact us for support, we may receive your email address and the
          information you choose to include in your message. Use only the details
          needed to describe your request.
        </p>
      </section>

      <section>
        <h2>Product Data</h2>
        <p>
          Current products are still under development. Product-specific privacy
          details will be provided when applications become available.
        </p>
      </section>

      <section>
        <h2>How Information Is Used</h2>
        <ul>
          <li>To respond to support requests.</li>
          <li>To improve product reliability and user experience.</li>
          <li>To maintain the security and integrity of our services.</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:support@amarutech.co.nz">support@amarutech.co.nz</a>.
        </p>
      </section>
    </PageShell>
  );
}
