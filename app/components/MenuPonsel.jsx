'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* Navigasi ponsel: panel grafit di bawah kepala halaman, tiap tautan dengan
   label kecil bergaya alat ukur. Tertutup saat pindah halaman, saat tautan
   diklik, atau dengan Escape. */
export default function MenuPonsel({ tautan }) {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const pathname = usePathname();

  useEffect(() => setBuka(false), [pathname]);
  useEffect(() => {
    if (!buka) return;
    const tutup = (e) => {
      if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); }
    };
    document.addEventListener('keydown', tutup);
    return () => document.removeEventListener('keydown', tutup);
  }, [buka]);

  return (
    <div className="md:hidden">
      <button
        ref={tombol}
        type="button"
        aria-label="Menu"
        aria-expanded={buka}
        aria-controls="menu-ponsel"
        onClick={() => setBuka((b) => !b)}
        className="flex h-11 w-11 items-center justify-center border border-chrome/25 text-chrome hover:border-signal hover:text-signal"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
          {buka ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>
      <nav id="menu-ponsel" aria-label="Navigasi utama" hidden={!buka} className="absolute inset-x-0 top-full border-b border-chrome/10 bg-graphite-2 px-5 pt-2 pb-5 shadow-[0_24px_40px_-24px_rgb(0_0_0/0.7)]">
        <ul className="divide-y divide-chrome/10">
          {tautan.map(([h, l, ket]) => (
            <li key={h}>
              <Link href={h} onClick={() => setBuka(false)} className="flex min-h-14 items-center justify-between gap-4 py-2 font-[family-name:var(--font-chivo)] text-lg font-bold text-chrome hover:text-signal">
                {l}
                <span className="meter-label text-chrome-dim">{ket}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
