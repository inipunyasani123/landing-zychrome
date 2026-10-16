import { FAQ as DAFTAR } from '@/lib/sesi';

export default function FAQ() {
  return (
    <section className="bg-graphite-2 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="meter-label mb-5 text-signal">Pertanyaan</p>
          <h2 className="text-[2rem] leading-[1.1] font-bold md:text-[2.7rem]">Sebelum sinyal dinyalakan</h2>
        </div>
        <div className="border-t border-chrome/20">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-chrome/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-bold text-chrome [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="text-signal transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
