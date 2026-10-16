import { NARASUMBER } from '@/lib/sesi';

/* Tanpa foto: tiap narasumber ditandai inisial dan batang sinyal yang
   menunjukkan seberapa lama ia berbicara di sesi (5 = paling lama). */
export default function Narasumber() {
  return (
    <section className="bg-graphite-2 py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="meter-label mb-5 text-signal">Di layar</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">Dua pembicara, satu pemandu yang membacakan jawaban Anda</h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {NARASUMBER.map((n) => (
            <li key={n.nama} className="border border-chrome/12 bg-graphite p-6">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-chivo)] text-3xl font-black text-signal">{n.inisial}</span>
                <span className="flex h-6 items-end gap-1" aria-label={`Porsi bicara ${n.sinyal} dari 5`} role="img">
                  {[1, 2, 3, 4, 5].map((k) => (
                    <span key={k} className={`w-1.5 ${k <= n.sinyal ? 'bg-signal' : 'bg-chrome/20'}`} style={{ height: `${k * 20}%` }} />
                  ))}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold sm:mt-6">{n.nama}</h3>
              <p className="meter-label mt-2 text-chrome-dim">{n.peran}</p>
              <p className="mt-4 text-sm leading-relaxed">{n.ringkas}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
