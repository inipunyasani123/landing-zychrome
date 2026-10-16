import Link from 'next/link';
import { SESI } from '@/lib/sesi';

export default function Sesi() {
  return (
    <section id="sesi" className="relative scroll-mt-16 overflow-hidden bg-graphite py-16 md:py-28">
      <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <div>
          <p className="meter-label mb-5 text-signal">Sesi {SESI.nomor} · {SESI.hari} · {SESI.jam}</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">{SESI.judul}</h2>
          <p className="mt-5 leading-relaxed">{SESI.ringkas}</p>
          <Link href="/coba" className="meter-label mt-8 inline-flex min-h-11 items-center border border-signal/50 px-5 text-signal hover:border-signal">
            Coba kuisnya sekarang
          </Link>
        </div>
        <ol className="grid gap-px bg-chrome/12 sm:grid-cols-2">
          {SESI.dibahas.map(([j, d], i) => (
            <li key={j} className="bg-graphite-2 p-5 sm:p-6">
              <p className="meter-label text-signal">Bagian {i + 1}</p>
              <h3 className="mt-2 text-lg font-bold sm:mt-3">{j}</h3>
              <p className="mt-2 text-sm leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
