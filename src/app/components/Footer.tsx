export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-cream-100 border-cream-200/50">
      <div className="max-w-6xl px-6 mx-auto md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          {/* Left copyright */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-cream-800">
              &copy; {currentYear} Andrzej Maślankiewicz. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-cream-600">
              Psycholog &amp; Psychoterapeuta Poznań
            </p>
          </div>

          {/* Right credit */}
          <div className="text-xs text-cream-600">
            Projekt i wykonanie: <span className="font-semibold text-sage-700">Antigravity</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
