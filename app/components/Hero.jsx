import { SESI } from '@/lib/sesi';

/* Komponen server: animasi masuk memakai kelas CSS .masuk/.geser (globals.css),
   jadi isi hero tampil tanpa menunggu JavaScript. */

const bacaan = [
  ['92%', 'Peserta ikut menjawab polling'],
  ['3,4 menit', 'Rata-rata pertanyaan terjawab'],
  ['6', 'Titik interaksi tiap sesi'],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-graphite pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-96" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="masuk mb-8 flex items-center gap-3">
              <span aria-hidden="true" className="signal-bars">
                <span /><span /><span /><span /><span />
              </span>
              <span className="meter-label text-signal">Sesi {SESI.nomor} · {SESI.hari}</span>
            </p>

            <h1 className="geser text-[2.5rem] leading-[1.02] font-bold sm:text-5xl lg:text-[3.8rem]">
              Webinar yang bisa
              <br />
              <span className="text-signal">membalas Anda.</span>
            </h1>

            <p className="mt-7 max-w-lg leading-relaxed text-chrome-dim">
              Enam titik interaksi di sepanjang sesi: polling, kuis, papan pertanyaan, dan reaksi
              langsung. Kami mengukur keterlibatannya, bukan sekadar menghitung jumlah penonton.
            </p>

            <div className="masuk mt-9 flex flex-col gap-4 [animation-delay:0.2s] sm:flex-row">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-signal px-8 py-4 text-sm font-bold text-graphite transition-colors duration-300 hover:bg-signal-2"
              >
                Daftar Sesi
              </a>
              <a
                href="#interaksi"
                className="inline-flex items-center justify-center border border-chrome/25 px-8 py-4 text-sm font-bold text-chrome transition-colors duration-300 hover:border-chrome/60"
              >
                Lihat Titik Interaksi
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-chrome/12 pt-8 sm:gap-8">
              {bacaan.map(([n, k]) => (
                <div key={k}>
                  <dt className="sr-only">{k}</dt>
                  <dd>
                    <span className="block text-xl font-bold text-chrome sm:text-2xl">{n}</span>
                    <span className="meter-label mt-2.5 block text-chrome-dim">{k}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Panel pembacaan langsung */}
          <div className="masuk border border-chrome/12 bg-graphite-2 p-6 [animation-delay:0.15s] sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-chrome/12 pb-4">
              <span className="meter-label text-chrome-dim">Panel Keterlibatan</span>
              <span aria-hidden="true" className="signal-bars">
                <span /><span /><span /><span /><span />
              </span>
            </div>

            <dl className="space-y-6">
              {[
                ['Polling terjawab', 92],
                ['Pertanyaan masuk', 74],
                ['Reaksi langsung', 61],
                ['Kuis diselesaikan', 88],
              ].map(([label, nilai]) => (
                <div key={label} className="relative">
                  <dt className="pr-14 text-sm text-chrome/90">{label}</dt>
                  <dd>
                    <span className="meter-label absolute top-0.5 right-0 text-signal">{nilai}%</span>
                    <span aria-hidden="true" className="mt-2.5 block h-1.5 w-full bg-chrome/10">
                      <span className="block h-full bg-signal" style={{ width: `${nilai}%` }} />
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="meter-label mt-7 border-t border-chrome/12 pt-5 leading-[1.7] text-chrome-dim">
              Angka contoh dari sesi purwarupa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
