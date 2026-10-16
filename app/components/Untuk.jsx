import { UNTUK } from '@/lib/sesi';

export default function Untuk() {
  return (
    <section className="bg-graphite-2 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="meter-label mb-5 text-signal">Siapa yang sebaiknya hadir</p>
        <ul className="grid gap-px bg-chrome/12 md:grid-cols-3">
          {UNTUK.map(([j, d]) => (
            <li key={j} className="bg-graphite-2 p-6 md:p-8">
              <h3 className="text-xl font-bold">{j}</h3>
              <p className="mt-3 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
