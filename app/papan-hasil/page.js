import Link from 'next/link';
import { PAPAN, SITE } from '@/lib/sesi';

export const metadata = {
  title: 'Papan Hasil',
  description: 'Papan hasil sesi Zychrome sebelumnya: jawaban polling, skor kuis, pertanyaan dengan suara terbanyak, dan reaksi peserta — semuanya anonim.',
  alternates: { canonical: `${SITE}/papan-hasil` },
};

function Batang({ label, nilai, max = 100, akhiran = '%' }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="text-chrome">{label}</span>
        <span className="meter-label shrink-0 text-signal">{nilai}{akhiran}</span>
      </div>
      <div aria-hidden="true" className="mt-2 h-1.5 bg-chrome/10">
        <div className="h-full bg-signal" style={{ width: `${(nilai / max) * 100}%` }} />
      </div>
    </div>
  );
}

export default function PapanHasil() {
  return (
    <main className="bg-graphite pt-16">
      <section className="relative overflow-hidden px-6 pt-16 pb-12">
        <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-80" />
        <div className="relative mx-auto max-w-6xl">
          <p className="meter-label text-signal">Papan hasil</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold md:text-5xl">
            Yang dijawab peserta, bukan yang diklaim penyelenggara
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed">
            Setiap sesi meninggalkan papan hasil: jawaban polling, skor kuis, pertanyaan dengan suara
            terbanyak, dan reaksi. Semuanya angka keseluruhan — tidak ada nama.
          </p>
          <nav aria-label="Lompat ke sesi" className="mt-8 flex flex-wrap gap-2">
            {PAPAN.map((p) => (
              <a key={p.nomor} href={`#sesi-${p.nomor}`} className="meter-label inline-flex min-h-11 items-center border border-chrome/20 px-3.5 py-2 text-chrome hover:border-signal hover:text-signal">
                Sesi {p.nomor}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="space-y-6 px-6 pb-24">
        {PAPAN.map((p) => {
          const maks = Math.max(...p.pertanyaan.map((q) => q[1]));
          const r = p.reaksi;
          return (
            <section key={p.nomor} id={`sesi-${p.nomor}`} aria-labelledby={`judul-${p.nomor}`} className="mx-auto max-w-6xl scroll-mt-24 border border-chrome/12 bg-graphite-2">
              <header className="flex flex-col gap-2 border-b border-chrome/12 p-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="meter-label text-signal">Sesi {p.nomor} · {p.hari}</p>
                  <h2 id={`judul-${p.nomor}`} className="mt-2 text-2xl font-bold">{p.judul}</h2>
                </div>
                <p className="meter-label text-chrome-dim">{p.peserta.toLocaleString('id-ID')} peserta</p>
              </header>
              <div className="grid gap-px bg-chrome/12 lg:grid-cols-2">
                <div className="bg-graphite-2 p-6">
                  <h3 className="meter-label text-chrome">Polling pembuka</h3>
                  <p className="mt-3 leading-snug font-semibold text-chrome">{p.polling.tanya}</p>
                  <div className="mt-5 space-y-4">
                    {p.polling.pilihan.map(([l, n]) => <Batang key={l} label={l} nilai={n} />)}
                  </div>
                </div>
                <div className="bg-graphite-2 p-6">
                  <h3 className="meter-label text-chrome">Kuis · jawaban benar</h3>
                  <div className="mt-5 space-y-4">
                    {p.kuis.map(([l, n]) => <Batang key={l} label={l} nilai={n} />)}
                  </div>
                </div>
                <div className="bg-graphite-2 p-6">
                  <h3 className="meter-label text-chrome">Papan pertanyaan · suara terbanyak</h3>
                  <ol className="mt-5 space-y-4">
                    {p.pertanyaan.map(([q, n]) => (
                      <li key={q}><Batang label={q} nilai={n} max={maks} akhiran=" suara" /></li>
                    ))}
                  </ol>
                </div>
                <div className="bg-graphite-2 p-6">
                  <h3 className="meter-label text-chrome">Reaksi sepanjang sesi</h3>
                  <div aria-hidden="true" className="mt-5 flex h-4 overflow-hidden">
                    <span className="bg-signal" style={{ width: `${r.jelas}%` }} />
                    <span className="bg-warn" style={{ width: `${r.bingung}%` }} />
                    <span className="bg-chrome/40" style={{ width: `${r.lebihCepat}%` }} />
                  </div>
                  <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    <div><dt className="meter-label text-signal">Jelas</dt><dd className="mt-1 text-chrome">{r.jelas}%</dd></div>
                    <div><dt className="meter-label text-warn">Bingung</dt><dd className="mt-1 text-chrome">{r.bingung}%</dd></div>
                    <div><dt className="meter-label">Lebih cepat</dt><dd className="mt-1 text-chrome">{r.lebihCepat}%</dd></div>
                  </dl>
                </div>
              </div>
            </section>
          );
        })}
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 pt-4 sm:flex-row sm:items-center">
          <p className="meter-label leading-[1.7]">Angka di papan hasil ini adalah contoh untuk keperluan purwarupa desain.</p>
          <Link href="/coba" className="meter-label inline-flex min-h-11 shrink-0 items-center bg-signal px-5 py-3 text-graphite hover:bg-signal-2">Coba menjawab sendiri</Link>
        </div>
      </div>
    </main>
  );
}
