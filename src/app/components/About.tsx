"use client";

import Image from "next/image";
import { CheckCircle2, GraduationCap, HeartHandshake } from "lucide-react";

export default function About() {
  const specializations = [
    { title: "Zaburzenia lękowe", desc: "Lęk napadowy, uogólniony, fobie, natręctwa (OCD)." },
    { title: "Depresja i obniżony nastrój", desc: "Pomoc w odzyskaniu energii, radości życia i motywacji." },
    { title: "Trudności w relacjach", desc: "Rozwiązywanie kryzysów partnerskich, budowanie zdrowych więzi." },
    { title: "Kryzysy życiowe i stres", desc: "Wsparcie w adaptacji do zmian (rozwód, żałoba, nowa rola życiowa)." },
    { title: "Wypalenie zawodowe", desc: "Praca nad balansem życiowym, asertywnością i radzeniem sobie ze stresem." },
    { title: "Niska samoocena", desc: "Budowanie akceptacji siebie, poczucia własnej wartości i pewności." },
  ];

  const qualifications = [
    "Magister Psychologii (Uniwersytet im. Adama Mickiewicza w Poznaniu)",
    "Szkolenie X Y Z",
    "Uczestnik konferencji A B C",
    "Stałe podnoszenie kwalifikacji w zakresie Q W E",
  ];

  return (
    <section id="o-nas" className="py-24 bg-white border-y border-cream-200/40">
      <div className="max-w-6xl px-6 mx-auto md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Text Column */}
          <div className="space-y-10 lg:col-span-7">
            {/* Section Header */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-sand-600 font-semibold">
                Poznajmy się bliżej
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-sage-950 sm:text-4xl">
                O mnie &mdash;  Andrzej Maślankiewicz
              </h2>
              <div className="w-16 h-1 bg-sage-500 rounded" />
            </div>

            {/* Empirical & Empathetic Bio */}
            <div className="space-y-4 text-cream-800 leading-relaxed text-base">
              <p>
                Wierzę, że psychoterapia to przede wszystkim spotkanie dwóch osób oparte na zaufaniu, poczuciu bezpieczeństwa i braku oceniania. Moim celem jest stworzenie dla Ciebie przestrzeni, w której możesz otwarcie przyjrzeć się swoim trudnościom i wspólnie wypracować konstruktywne sposoby radzenia sobie z nimi.
              </p>
              <p>
                Swoją pracę opieram na <strong>terapii poznawczo-behawioralnej (CBT)</strong>, której skuteczność jest potwierdzona licznymi badaniami naukowymi. W zależności od Twoich potrzeb czerpię również z metod Terapii Akceptacji i Zaangażowania (ACT) oraz Terapii Schematów.
              </p>
            </div>

            {/* Specializations Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sage-800 font-semibold font-serif text-lg">
                <HeartHandshake className="w-5 h-5 text-sage-600" />
                <h3>W czym mogę Ci pomóc?</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {specializations.map((spec, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-cream-50 border border-cream-200/50 hover:border-sage-200 hover:bg-sage-50/20 transition-all duration-300 group"
                  >
                    <h4 className="font-semibold text-sage-900 group-hover:text-sage-700 transition-colors duration-200">
                      {spec.title}
                    </h4>
                    <p className="text-sm text-cream-700 mt-2 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications Summary */}
            <div className="space-y-6 pt-6 border-t border-cream-200/50">
              <div className="flex items-center gap-2 text-sage-800 font-semibold font-serif text-lg">
                <GraduationCap className="w-5 h-5 text-sage-600" />
                <h3>Wykształcenie i Kwalifikacje</h3>
              </div>
              <ul className="space-y-3.5">
                {qualifications.map((qual, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-cream-800">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 mt-0.5 shrink-0" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image / Portrait Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl shadow-xl overflow-hidden border-8 border-cream-50 bg-cream-100">
              {/* Gold Accent Overlay border */}
              <div className="absolute inset-0 border border-sage-500/20 rounded-lg pointer-events-none z-10" />

              <Image
                src="/therapist.jpg"
                alt="MAndrzej Maślankiewicz— Psycholog i Psychoterapeuta w Poznaniu"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>

            {/* Info Snippet below Portrait */}
            <div className="mt-6 text-center max-w-[360px] p-4 bg-cream-50/50 rounded-xl border border-cream-200/40">
              <p className="text-xs italic text-cream-700">
                &bdquo;Największym odkryciem mojego pokolenia jest to, że człowiek może zmienić swoje życie, zmieniając swoje nastawienie psychiczne.&rdquo;
              </p>
              <p className="text-[11px] font-medium text-sage-700 mt-2 uppercase tracking-wider">
                &mdash; William James
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
