import Link from 'next/link';
import MenuPonsel from './MenuPonsel';

const NAV = [
  ['/#interaksi', 'Titik interaksi', '6 titik'],
  ['/#sesi', 'Sesi 07', '95 menit'],
  ['/papan-hasil', 'Papan hasil', '3 sesi lalu'],
  ['/coba', 'Coba menjawab', 'Polling & kuis'],
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-chrome/10 bg-graphite/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 py-2">
          <span aria-hidden="true" className="signal-bars"><span /><span /><span /><span /><span /></span>
          <span className="font-[family-name:var(--font-chivo)] text-lg font-bold tracking-tight text-chrome">Zychrome</span>
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className="meter-label py-2 text-chrome-dim transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#daftar" className="inline-flex h-11 items-center bg-signal px-4 text-xs font-bold text-graphite hover:bg-signal-2">
            Daftar sesi
          </Link>
          <MenuPonsel tautan={NAV} />
        </div>
      </div>
    </header>
  );
}
