import Link from 'next/link';
import { PAPAN, SESI } from '@/lib/sesi';

export default function SiteFooter() {
  return (
    <footer className="border-t border-chrome/10 bg-graphite-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-chivo)] text-xl font-bold text-chrome">Zychrome</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Webinar 95 menit dengan enam titik interaksi, tiap Selasa ketiga. Sesi {SESI.nomor}: {SESI.hari}.
            Tidak berafiliasi dengan bank, dompet digital, atau marketplace mana pun.
          </p>
        </div>
        <nav aria-label="Papan hasil">
          <p className="meter-label mb-4 text-signal">Papan hasil</p>
          <ul className="space-y-1 text-sm">
            {PAPAN.map((p) => (
              <li key={p.nomor}>
                <Link href={`/papan-hasil#sesi-${p.nomor}`} className="inline-flex min-h-11 items-center hover:text-chrome">Sesi {p.nomor} · {p.judul}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Coba">
          <p className="meter-label mb-4 text-signal">Sebelum mendaftar</p>
          <ul className="space-y-1 text-sm">
            <li><Link href="/coba" className="inline-flex min-h-11 items-center hover:text-chrome">Coba polling & kuis</Link></li>
            <li><Link href="/#harga" className="inline-flex min-h-11 items-center hover:text-chrome">Harga</Link></li>
            <li><Link href="/#daftar" className="inline-flex min-h-11 items-center hover:text-chrome">Daftar sesi {SESI.nomor}</Link></li>
          </ul>
        </nav>
      </div>
      <p className="meter-label mx-auto max-w-6xl border-t border-chrome/10 px-6 py-6 leading-[1.7]">
        © 2026 Zychrome · Nama, angka, jadwal, dan harga di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
