import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Buddy Trips - Adventure Tours & Treks Across India",
    template: "%s - Buddy Trips",
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  metadataBase: new URL(site.url),
  alternates: { canonical: site.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.url,
    title: "Buddy Trips - Adventure Tours & Treks Across India",
    description: site.description,
    images: [
      {
        url: "/images/hero/manali_kasol.jpg",
        alt: "Buddy Trips adventure travel across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddy Trips - Adventure Tours & Treks Across India",
    description: site.description,
    images: ["/images/hero/manali_kasol.jpg"],
  },
  icons: {
    icon: "/images/brand/buddytrips.png",
    apple: "/images/brand/buddytrips.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <JsonLd data={[getOrganizationJsonLd(), getWebsiteJsonLd()]} />
        <div className="relative min-h-screen bg-bg">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
