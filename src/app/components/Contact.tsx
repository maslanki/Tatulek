"use client";

import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-gradient-to-br from-sage-50/30 via-cream-50 to-sand-50/20">
      <div className="max-w-6xl px-6 mx-auto md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8 lg:col-span-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-sand-600 font-semibold">
                Kontakt
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-sage-950 sm:text-4xl">
                Skontaktuj się ze mną
              </h2>
              <p className="text-cream-800 text-sm max-w-md">
                Chcesz umówić pierwszą konsultację lub masz pytania dotyczące przebiegu psychoterapii? Zadzwoń, napisz wiadomość lub skorzystaj z poniższego formularza.
              </p>
              <div className="w-16 h-1 bg-sage-500 rounded" />
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-4">
              {/* Practice Name & Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-950 text-sm">Adres Gabinetu</h4>
                  <p className="text-cream-800 text-sm mt-1">
                    Gabinet Psychoterapii &bdquo;Przestrzeń Spokoju&rdquo;<br />
                    ul. Fredry 1 lok. 4, 61-701 Poznań
                  </p>
                  <p className="text-xs text-cream-600 mt-0.5">
                    (II piętro, w budynku znajduje się winda. Gabinet usytuowany w ścisłym centrum, naprzeciwko Parku Fredry)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-950 text-sm">Telefon</h4>
                  <a
                    href="tel:+48601234567"
                    className="text-cream-800 hover:text-sage-700 text-sm mt-1 block transition-colors duration-200"
                  >
                    +48 601 234 567
                  </a>
                  <p className="text-[11px] text-cream-600">
                    Jeżeli nie odbieram, prowadzę sesję. Proszę o SMS &mdash; oddzwonię.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-950 text-sm">E-mail</h4>
                  <a
                    href="mailto:kontakt@martakowalska.pl"
                    className="text-cream-800 hover:text-sage-700 text-sm mt-1 block transition-colors duration-200"
                  >
                    kontakt@martakowalska.pl
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-950 text-sm">Godziny Przyjęć</h4>
                  <p className="text-cream-800 text-sm mt-1">
                    Poniedziałek &mdash; Piątek: 08:00 &mdash; 20:00<br />
                    Sobota (wyłącznie online): 09:00 &mdash; 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded iframe */}
            <div className="pt-6">
              <div className="overflow-hidden rounded-2xl border border-cream-200 shadow-lg aspect-[16/9] w-full max-w-md relative bg-cream-100">
                <iframe
                  title="Mapa z lokalizacją gabinetu na ul. Fredry 1 w Poznaniu"
                  src="https://maps.google.com/maps?q=Fredry%201,%20Pozna%C5%84&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-[0.95] opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
