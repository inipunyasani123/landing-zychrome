import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { Chivo, Poppins } from 'next/font/google';
import { SESI } from '@/lib/sesi';

// Tanggal sesi di lib/sesi.js bergulir mengikuti hari ini; bangun ulang sekali sehari.
export const revalidate = 86400;

const DESKRIPSI = `Zychrome: webinar 95 menit, enam titik interaksi. Sesi ${SESI.nomor}: ${SESI.judul}, ${SESI.hari}. Ikut gratis.`;

const chivo = Chivo({ variable: '--font-chivo', subsets: ['latin'], weight: ['600', '700', '900'] });
const poppins = Poppins({ variable: '--font-poppins', weight: ['400', '600', '700'], subsets: ['latin'], display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Zychrome","description":"Webinar dengan enam titik interaksi","url":"https://landing-zychrome.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-zychrome.pintuweb.id"),
  title: { default: "Zychrome — Webinar yang Bisa Membalas Anda", template: "%s — Zychrome" },
  description: DESKRIPSI,
  applicationName: "Zychrome",
  keywords: ["webinar interaktif", "webinar penipuan digital", "keamanan usaha kecil", "polling webinar", "pelatihan kasir"],
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
    description: DESKRIPSI,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Zychrome — Webinar yang Bisa Membalas Anda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zychrome — Webinar yang Bisa Membalas Anda",
    description: DESKRIPSI,
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
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-signal focus:px-4 focus:py-2 focus:text-graphite">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=zychrome" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
