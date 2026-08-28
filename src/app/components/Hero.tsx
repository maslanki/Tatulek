"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("kontakt");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-cream-100 via-cream-50 to-sage-100/50 overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-200/30 rounded-full filter blur-3xl -z-10 translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sand-200/20 rounded-full filter blur-3xl -z-10 -translate-x-20 translate-y-20" />

      <div className="max-w-6xl px-6 mx-auto md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Tag / Location */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-200/50 border border-sage-300/40 text-sage-800 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Poznań Stare Miasto &amp; Online</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl font-bold tracking-tight text-sage-950 sm:text-5xl md:text-6xl leading-[1.15]">
              Twoja przestrzeń na <br />
              <span className="text-sage-700 italic">spokój, zrozumienie</span> <br />i rozwój.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-lg text-base md:text-lg text-cream-800 leading-relaxed">
              Profesjonalne wsparcie psychologiczne i psychoterapia w przyjaznej atmosferze. Pomagam odnaleźć wewnętrzną równowagę, uporać się z lękiem, kryzysami życiowymi oraz odbudować satysfakcjonujące relacje.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleScrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-full font-medium shadow-lg shadow-sage-600/20 hover:bg-sage-700 hover:shadow-sage-700/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              >
                <span>Umów wizytę</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#o-nas"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("o-nas");
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
                className="flex items-center justify-center px-8 py-4 border border-sage-300 text-sage-800 rounded-full font-medium bg-white/40 hover:bg-white/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2"
              >
                Poznaj moje podejście
              </a>
            </div>

            {/* Micro-proof / Trust stats */}
            <div className="pt-4 border-t border-cream-200/85 grid grid-cols-2 gap-4 max-w-sm">
              <div>
                <span className="block font-serif text-2xl font-bold text-sage-800">100%</span>
                <span className="text-xs text-cream-700">Poufność i profesjonalizm</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-sage-800">CBT</span>
                <span className="text-xs text-cream-700">Skuteczne, naukowe metody</span>
              </div>
            </div>
          </div>

          {/* Hero Right Image & Glassmorphism Card */}
          <div className="relative lg:col-span-5 flex justify-center">
            {/* Back accent */}
            <div className="absolute -inset-2 bg-sand-200 rounded-2xl filter blur-xl opacity-30 -z-10 transform -rotate-3" />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/60 w-full max-w-md aspect-[4/3] lg:aspect-square">
              <Image
                src="/office.jpg"
                alt="Jasny, przytulny gabinet psychoterapeutyczny w Poznaniu"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            {/* Floating Glassmorphism Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 max-w-[240px] hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 animate-pulse" />
                <div>
                  <p className="text-xs font-semibold text-sage-950 uppercase tracking-wide">Bezpieczna przestrzeń</p>
                  <p className="text-xs text-cream-800 mt-1">Gabinet w ścisłym centrum Poznania (naprzeciwko Parku Fredry).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
