import { HARGA } from '@/lib/sesi';

export default function Harga() {
  return (
    <section id="harga" className="scroll-mt-16 bg-graphite py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="meter-label mb-5 text-signal">Harga</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">Ikut menjawabnya gratis. Rekaman dan papan hasilnya berbayar.</h2>
        </div>
        <ul className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {HARGA.map((h) => (
            <li key={h.nama} className={`flex flex-col border p-6 sm:p-7 ${h.unggulan ? 'border-signal bg-graphite-2' : 'border-chrome/12 bg-graphite-2'}`}>
              <p className="meter-label text-signal">{h.nama}{h.unggulan && ` · ${h.unggulan}`}</p>
              <p className="mt-3 text-3xl font-bold text-chrome sm:mt-4">
                {h.harga} <span className="text-sm font-normal text-chrome-dim">{h.satuan}</span>
              </p>
              <ul className="mt-5 space-y-2 border-t border-chrome/12 pt-5 text-sm sm:mt-6 sm:space-y-2.5 sm:pt-6">
                {h.dapat.map((d) => (
                  <li key={d} className="flex gap-3 text-chrome">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={`/?paket=${encodeURIComponent(h.nama)}#daftar`}
                className={`mt-6 inline-flex justify-center py-3.5 text-sm font-bold sm:mt-8 ${h.unggulan ? 'bg-signal text-graphite hover:bg-signal-2' : 'border border-chrome/25 text-chrome hover:border-signal hover:text-signal'}`}
              >
                Pilih {h.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
