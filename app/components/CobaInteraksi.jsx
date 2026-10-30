'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COBA_KUIS, COBA_POLLING } from '@/lib/sesi';

function Polling() {
  const [pilih, setPilih] = useState(null);
  const data = COBA_POLLING.pilihan.map(([l, n]) => [l, n + (pilih === l ? 1 : 0)]);
  const total = data.reduce((s, [, n]) => s + n, 0);

  return (
    <section aria-labelledby="polling" className="border border-chrome/12 bg-graphite-2 p-6 sm:p-8">
      <p className="meter-label text-signal">Titik 1 · Polling</p>
      <h2 id="polling" className="mt-3 text-xl leading-snug font-bold">{COBA_POLLING.tanya}</h2>
      {pilih === null ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {COBA_POLLING.pilihan.map(([l]) => (
            <button key={l} type="button" onClick={() => setPilih(l)} className="border border-chrome/20 px-4 py-3.5 text-left text-chrome hover:border-signal hover:text-signal">
              {l}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-4" aria-live="polite">
          {data.map(([l, n]) => {
            const pct = Math.round((n / total) * 100);
            return (
              <div key={l}>
                <div className="flex justify-between gap-4 text-sm">
                  <span className={pilih === l ? 'font-bold text-signal' : 'text-chrome'}>{l}{pilih === l && ' · pilihan Anda'}</span>
                  <span className="meter-label text-chrome">{pct}%</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-1.5 bg-chrome/10">
                  <div className={`h-full ${pilih === l ? 'bg-signal' : 'bg-chrome/40'}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
          <p className="meter-label pt-2">{total.toLocaleString('id-ID')} jawaban · termasuk angka contoh dari sesi lalu</p>
        </div>
      )}
    </section>
  );
}

function Kuis() {
  const [jawab, setJawab] = useState({});
  const selesai = Object.keys(jawab).length === COBA_KUIS.length;
  const benar = COBA_KUIS.filter((k, i) => jawab[i] !== undefined && jawab[i] === k.palsu).length;

  return (
    <section aria-labelledby="kuis" className="border border-chrome/12 bg-graphite-2 p-6 sm:p-8">
      <p className="meter-label text-signal">Titik 3 · Kuis</p>
      <h2 id="kuis" className="mt-3 text-xl leading-snug font-bold">Asli atau palsu?</h2>
      <ol className="mt-6 space-y-6">
        {COBA_KUIS.map((k, i) => {
          const sudah = jawab[i] !== undefined;
          const tepat = sudah && jawab[i] === k.palsu;
          return (
            <li key={k.pesan} className="border-t border-chrome/12 pt-6">
              <p className="meter-label">Pesan {i + 1}</p>
              <blockquote className="mt-3 border-l-2 border-chrome/30 pl-4 leading-relaxed text-chrome">{k.pesan}</blockquote>
              {!sudah ? (
                <div className="mt-4 flex gap-3">
                  <button type="button" onClick={() => setJawab((j) => ({ ...j, [i]: false }))} className="meter-label min-h-11 border border-chrome/25 px-4 py-2.5 text-chrome hover:border-signal hover:text-signal">Asli</button>
                  <button type="button" onClick={() => setJawab((j) => ({ ...j, [i]: true }))} className="meter-label min-h-11 border border-chrome/25 px-4 py-2.5 text-chrome hover:border-warn hover:text-warn">Palsu</button>
                </div>
              ) : (
                <div className="mt-4" aria-live="polite">
                  <p className={`meter-label ${tepat ? 'text-signal' : 'text-warn'}`}>
                    {tepat ? 'Tepat' : 'Belum tepat'} · pesan ini {k.palsu ? 'palsu' : 'asli'}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{k.alasan}</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {selesai && (
        <div className="mt-8 border-t border-chrome/12 pt-6" role="status">
          <p className="text-2xl font-bold text-chrome">{benar} dari {COBA_KUIS.length} tepat.</p>
          <p className="mt-2 leading-relaxed">Di sesi sungguhan ada lima pesan, dan pembicara membahas pesan yang paling banyak ditebak salah.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#daftar" className="meter-label bg-signal px-5 py-3 text-graphite hover:bg-signal-2">Daftar sesi 07</Link>
            <button type="button" onClick={() => setJawab({})} className="meter-label border border-chrome/25 px-5 py-3 text-chrome hover:border-signal hover:text-signal">Ulangi kuis</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function CobaInteraksi() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="h-fit lg:sticky lg:top-24">
        <Polling />
      </div>
      <Kuis />
    </div>
  );
}
