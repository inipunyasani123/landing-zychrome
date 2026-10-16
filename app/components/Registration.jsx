'use client';

import { useEffect, useState } from 'react';
import { HARGA } from '@/lib/sesi';

const PERAN = ['Pemilik usaha', 'Kasir / admin toko', 'Pengelola akun marketplace', 'Lainnya'];

/* Data sesi (nomor, judul, tanggal, jam) dikirim dari server lewat props:
   tanggalnya bergulir harian, jadi tidak boleh dihitung ulang di peramban. */
export default function Registration({ sesi }) {
  const [paket, setPaket] = useState('Gratis');
  const [selesai, setSelesai] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('paket');
    if (p && HARGA.some((h) => h.nama === p)) setPaket(p);
  }, []);

  const kirim = (e) => {
    e.preventDefault();
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(true);
  };

  const input = 'w-full border border-chrome/20 bg-graphite px-4 py-3 text-chrome focus:border-signal focus:outline-none';

  return (
    <section id="daftar" className="relative scroll-mt-16 overflow-hidden bg-graphite py-16 md:py-28">
      <div aria-hidden="true" className="signal-glow absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="meter-label mb-5 text-signal">Daftar</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">Sesi {sesi.nomor}: {sesi.judul}</h2>
          <p className="mt-5 leading-relaxed">{sesi.hari} · {sesi.jam}. Tautan sesi dikirim satu jam sebelum mulai.</p>
          <p className="mt-6 border-l-2 border-warn pl-4 text-sm leading-relaxed text-chrome">
            Zychrome tidak akan pernah meminta kode OTP, PIN, atau kata sandi — termasuk di formulir ini.
          </p>
        </div>
        <div className="border border-chrome/12 bg-graphite-2 p-6 sm:p-8">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="meter-label text-signal">Tercatat · paket {paket}</p>
              <p className="mt-4 text-2xl font-bold text-chrome">Siapkan jempol untuk polling pertama.</p>
              <p className="mt-3 leading-relaxed">Ini purwarupa desain, jadi tidak ada data yang dikirim dan tidak ada tautan yang akan datang.</p>
              <button type="button" onClick={() => setSelesai(false)} className="meter-label mt-6 border border-chrome/25 px-4 py-3 text-chrome hover:border-signal hover:text-signal">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-5">
              <fieldset>
                <legend className="meter-label mb-3 text-chrome">Paket</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {HARGA.map((h) => (
                    <label key={h.nama} className={`cursor-pointer border p-3.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-signal ${paket === h.nama ? 'border-signal bg-signal/10' : 'border-chrome/15 hover:border-chrome/40'}`}>
                      <input type="radio" name="paket" value={h.nama} checked={paket === h.nama} onChange={() => setPaket(h.nama)} className="sr-only" />
                      <span className="meter-label block text-chrome">{h.nama}</span>
                      <span className="mt-1.5 block text-sm text-chrome">{h.harga}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="meter-label mb-2 block text-chrome">Nama</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="surel" className="meter-label mb-2 block text-chrome">Surel</label>
                  <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
                </div>
              </div>
              <div>
                <label htmlFor="peran" className="meter-label mb-2 block text-chrome">Peran Anda di usaha</label>
                <select id="peran" name="peran" required defaultValue="" className={input}>
                  <option value="" disabled>Pilih peran</option>
                  {PERAN.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-signal py-4 text-sm font-bold text-graphite hover:bg-signal-2">
                Daftar sesi {sesi.nomor} · {paket}
              </button>
              <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
