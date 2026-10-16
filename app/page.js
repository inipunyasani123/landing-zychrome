import Hero from "./components/Hero";
import Interaction from "./components/Interaction";
import Sesi from "./components/Sesi";
import Narasumber from "./components/Narasumber";
import Rundown from "./components/Rundown";
import Untuk from "./components/Untuk";
import Harga from "./components/Harga";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import { SESI, SITE } from "@/lib/sesi";

const eventLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: `Zychrome Sesi ${SESI.nomor}: ${SESI.judul}`,
  startDate: `${SESI.iso}T19:30:00+07:00`,
  endDate: `${SESI.iso}T21:05:00+07:00`,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: { "@type": "VirtualLocation", url: SITE },
  organizer: { "@type": "Organization", name: "Zychrome", url: SITE },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Interaction />
      <Sesi />
      <Narasumber />
      <Rundown />
      <Untuk />
      <Harga />
      <FAQ />
      <Registration sesi={{ nomor: SESI.nomor, judul: SESI.judul, hari: SESI.hari, jam: SESI.jam }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
