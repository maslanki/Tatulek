"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset sent message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-cream-200/50 p-6 md:p-8 border border-cream-200/40 relative overflow-hidden">
      {isSent && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
          <h4 className="font-serif text-xl font-bold text-sage-950">Wiadomość została wysłana!</h4>
          <p className="text-sm text-cream-700 mt-2 max-w-xs">
            Dziękuję za kontakt. Odpowiem na Twoją wiadomość najszybciej, jak to możliwe (zazwyczaj w ciągu 24 godzin).
          </p>
          <button
            onClick={() => setIsSent(false)}
            className="mt-6 text-sm text-sage-600 hover:text-sage-800 font-semibold focus:outline-none"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      )}

      <h3 className="font-serif text-xl font-bold text-sage-950 mb-6">
        Napisz do mnie
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name input */}
        <div className="space-y-1.5">
          <label htmlFor="form-name" className="text-xs font-semibold text-cream-800 uppercase tracking-wider">
            Imię i Nazwisko
          </label>
          <input
            type="text"
            id="form-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="np. Jan Kowalski"
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-cream-50/50 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 focus:bg-white transition-all duration-200 text-sm"
          />
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <label htmlFor="form-email" className="text-xs font-semibold text-cream-800 uppercase tracking-wider">
            Adres E-mail
          </label>
          <input
            type="email"
            id="form-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="np. jan.kowalski@example.pl"
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-cream-50/50 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 focus:bg-white transition-all duration-200 text-sm"
          />
        </div>

        {/* Message input */}
        <div className="space-y-1.5">
          <label htmlFor="form-message" className="text-xs font-semibold text-cream-800 uppercase tracking-wider">
            Treść Wiadomości
          </label>
          <textarea
            id="form-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="W czym mogę Ci pomóc? Opisz krótko swoją sytuację..."
            className="w-full px-4 py-3 rounded-lg border border-cream-300 bg-cream-50/50 text-cream-950 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 focus:bg-white transition-all duration-200 text-sm resize-none"
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-medium text-white shadow-lg bg-sage-600 hover:bg-sage-700 transition-all duration-300 hover:shadow-sage-600/20 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sage-500 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span>Wysyłanie...</span>
            </span>
          ) : (
            <>
              <span>Wyślij wiadomość</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
