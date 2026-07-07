import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Amaru Tech Labs and the InVault Android application."
};

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="This page explains how Amaru Tech Labs handles privacy for the InVault Android application, website, and support communications."
    >
      <section>
        <h2>Overview</h2>
        <p>
          Amaru Tech Labs develops Android utility applications. This Privacy
          Policy applies to InVault, our Android media utility currently available
          through Google Play testing, as well as related support communications
          and this website.
        </p>
      </section>

      <section>
        <h2>Information Collected</h2>
        <p>
          InVault is designed to keep your private media workflow on your device.
          Amaru Tech Labs does not require you to create an account and does not
          collect the photos, videos, downloaded media, file names, folders, or
          other media content you manage in the app.
        </p>
        <p>
          If you contact us for support, we may receive your email address and any
          information you choose to include in your message. You should include
          only the details needed to describe your request.
        </p>
      </section>

      <section>
        <h2>Local Storage of Downloaded Media</h2>
        <p>
          Media downloaded, imported, organized, or stored through InVault remains
          on your Android device unless you choose to move, share, delete, back up,
          or otherwise manage it through your device or another service. Amaru
          Tech Labs does not operate a cloud storage service for InVault media and
          does not access your locally stored media content.
        </p>
      </section>

      <section>
        <h2>Android Permissions</h2>
        <p>
          InVault may request Android permissions needed for its utility features,
          such as accessing media files, saving downloaded content, connecting to
          the internet, or showing notifications where supported by the app and
          your Android version. Permissions are used only to provide the features
          you choose to use. You can manage app permissions at any time in Android
          system settings.
        </p>
      </section>

      <section>
        <h2>Google AdMob Advertising</h2>
        <p>
          InVault may display advertising provided by Google AdMob. Google and its
          partners may collect or receive device identifiers, approximate location,
          app interaction data, diagnostics, and other information for ad delivery,
          ad measurement, fraud prevention, and related advertising purposes,
          depending on your device settings and consent choices.
        </p>
        <p>
          You can learn more about how Google uses data from apps that use its
          services at{" "}
          <a href="https://policies.google.com/technologies/partner-sites">
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          InVault may use third-party services that help operate, distribute, or
          improve the app. These services may process information according to
          their own privacy policies.
        </p>
        <ul>
          <li>Google Play for app distribution, testing, updates, and crash or install diagnostics.</li>
          <li>Google AdMob for in-app advertising and ad measurement.</li>
          <li>Email service providers used when you contact us for support.</li>
        </ul>
      </section>

      <section>
        <h2>How Information Is Used</h2>
        <ul>
          <li>To provide and maintain InVault features.</li>
          <li>To respond to support requests.</li>
          <li>To improve app reliability, compatibility, and user experience.</li>
          <li>To show, measure, and protect advertising where Google AdMob is used.</li>
          <li>To maintain the security and integrity of our products and services.</li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We use reasonable administrative and technical measures to protect
          information we handle. Local media stored through InVault remains subject
          to the security of your device, Android settings, backups, and any
          third-party apps or services you choose to use. No method of electronic
          storage or transmission is completely secure.
        </p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>
          InVault is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided personal information to us, contact us so we can
          review and delete it where appropriate.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:support@amarutech.co.nz">support@amarutech.co.nz</a>.
        </p>
      </section>
    </PageShell>
  );
}
