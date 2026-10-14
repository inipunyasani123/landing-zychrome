import "./globals.css";
import MotionProvider from "./components/MotionProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Chivo, Poppins } from 'next/font/google';

const chivo = Chivo({ variable: '--font-chivo', subsets: ['latin'], weight: ['600', '700', '900'] });
const poppins = Poppins({ variable: '--font-poppins', weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Zychrome","description":"Webinar dengan enam titik interaksi","url":"https://landing-zychrome.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-zychrome.pintuweb.id"),
  title: { default: "Zychrome — Webinar yang Bisa Membalas Anda", template: "%s — Zychrome" },
  description: "Zychrome: webinar 95 menit dengan enam titik interaksi. Sesi 07 \"Mengenali penipuan digital untuk usaha kecil\", Selasa 20 Oktober 2026. Coba polling dan kuisnya sebelum mendaftar.",
  applicationName: "Zychrome",
  keywords: ["webinar", "kelas online", "skill", "pelatihan", "webinar interaktif"],
  authors: [{ name: "Zychrome" }],
  creator: "Zychrome",
  publisher: "Zychrome",
  alternates: { canonical: "https://landing-zychrome.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-zychrome.pintuweb.id",
    siteName: "Zychrome",
    title: "Zychrome — Webinar yang Bisa Membalas Anda",
    description: "Zychrome: webinar 95 menit dengan enam titik interaksi. Sesi 07 \"Mengenali penipuan digital untuk usaha kecil\", Selasa 20 Oktober 2026. Coba polling dan kuisnya sebelum mendaftar.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Zychrome — Webinar yang Bisa Membalas Anda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zychrome — Webinar yang Bisa Membalas Anda",
    description: "Zychrome: webinar 95 menit dengan enam titik interaksi. Sesi 07 \"Mengenali penipuan digital untuk usaha kecil\", Selasa 20 Oktober 2026. Coba polling dan kuisnya sebelum mendaftar.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${chivo.variable} ${poppins.variable}`}>
        <MotionProvider>
          <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-signal focus:px-4 focus:py-2 focus:text-graphite">Lompat ke konten</a>
          <SiteHeader />
          <div id="konten">{children}</div>
          <SiteFooter />
        </MotionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
