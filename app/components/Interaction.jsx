import Link from 'next/link';

/* ============================================================================
   Bagian penanda Zychrome: TITIK INTERAKSI.
   Klaim "interaktif" biasanya berhenti sebagai kata sifat. Di sini dipetakan
   sepanjang garis waktu sesi: menit ke berapa peserta diminta menjawab, dan
   apa bentuk interaksinya — sehingga janjinya bisa diperiksa.
   ========================================================================== */

const titik = [
  { menit: 5, nama: 'Polling pembuka', ket: 'Menakar sejauh mana peserta sudah paham topiknya.' },
  { menit: 18, nama: 'Papan pertanyaan', ket: 'Pertanyaan masuk dan dipilih peserta lewat suara terbanyak.' },
  { menit: 34, nama: 'Kuis singkat', ket: 'Tiga soal untuk mengunci materi yang baru dibahas.' },
  { menit: 52, nama: 'Reaksi langsung', ket: 'Pembicara menyesuaikan tempo dari reaksi yang masuk.' },
  { menit: 70, nama: 'Ruang diskusi kecil', ket: 'Peserta dipecah ke kelompok berisi lima orang.' },
  { menit: 88, nama: 'Tanya jawab terbuka', ket: 'Pertanyaan yang belum terjawab dibereskan di sini.' },
];

const TOTAL = 95;

export default function Interaction() {
  return (
    <section id="interaksi" className="relative scroll-mt-16 overflow-hidden bg-graphite-2 py-16 md:py-28">
      <div aria-hidden="true" className="panel-grid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="meter-label mb-5 text-signal">Titik Interaksi</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">
            Enam kali Anda diminta menjawab, bukan sekadar menonton
          </h2>
          <p className="mt-5 leading-relaxed text-chrome-dim">
            Ini peta sesi sepanjang 95 menit. Tiap penanda adalah momen peserta ikut menentukan arah
            pembahasan.
          </p>
        </div>

        {/* Garis waktu sesi */}
        <div className="relative mb-12 hidden h-14 md:block">
          <div aria-hidden="true" className="absolute inset-x-0 top-6 h-px bg-chrome/20" />
          {titik.map((t) => (
            <div
              key={t.menit}
              className="absolute -translate-x-1/2"
              style={{ left: `${(t.menit / TOTAL) * 100}%` }}
            >
              <span className="meter-label block text-center text-chrome-dim">{t.menit}′</span>
              <span
                aria-hidden="true"
                className="mx-auto mt-1.5 block h-3 w-3 rounded-full border-2 border-signal bg-graphite-2"
              />
            </div>
          ))}
        </div>

        <ol className="grid gap-px bg-chrome/12 sm:grid-cols-2 lg:grid-cols-3">
          {titik.map((t) => (
            <li key={t.menit} className="grid grid-cols-[3.75rem_minmax(0,1fr)] gap-x-3 bg-graphite-2 px-5 py-4 sm:block sm:p-7">
              <div className="flex items-start justify-between sm:mb-5 sm:items-center">
                {/* Ponsel: menit besar di kolom kiri, seperti penanda garis waktu. */}
                <span className="font-[family-name:var(--font-chivo)] text-2xl leading-none font-bold text-signal tabular-nums sm:hidden">
                  <span className="sr-only">Menit </span>{t.menit}<span aria-hidden="true">′</span>
                </span>
                <span className="meter-label hidden text-signal sm:inline">Menit {t.menit}</span>
                {/* .signal-bars berupa CSS tanpa lapisan (display:flex), jadi disembunyikan lewat pembungkus. */}
                <span aria-hidden="true" className="hidden sm:block">
                  <span className="signal-bars h-3">
                    <span /><span /><span />
                  </span>
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-chrome">{t.nama}</h3>
                <p className="mt-1 text-sm leading-relaxed text-chrome-dim sm:mt-2.5">{t.ket}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="meter-label leading-[1.7] text-chrome-dim">Susunan interaksi di atas adalah contoh untuk keperluan purwarupa desain.</p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/coba" className="meter-label inline-flex min-h-11 items-center bg-signal px-4 text-graphite hover:bg-signal-2">Coba dua di antaranya</Link>
            <Link href="/papan-hasil" className="meter-label inline-flex min-h-11 items-center border border-chrome/25 px-4 text-chrome hover:border-signal hover:text-signal">Lihat papan hasil</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
