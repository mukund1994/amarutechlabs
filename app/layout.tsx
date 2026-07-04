import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const title = "Amaru Tech Labs";
const description = "Building modern Android applications and digital utilities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amarutech.co.nz"),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  applicationName: title,
  keywords: [
    "Amaru Tech Labs",
    "Android applications",
    "digital utilities",
    "productivity apps",
    "media utilities"
  ],
  authors: [{ name: "Amaru Tech Labs" }],
  openGraph: {
    title,
    description,
    url: "https://amarutech.co.nz",
    siteName: title,
    type: "website",
    locale: "en_NZ"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
