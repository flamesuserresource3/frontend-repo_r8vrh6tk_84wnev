import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="bg-gradient-to-b from-amber-200 to-yellow-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              The Gold Standard, Every Time
            </h2>
            <p className="mt-4 text-amber-100/80">
              At SHINE, we bring finesse to every detail — from flawlessly typed documents to standout designs and studio visuals. Our approach blends precision, modern style, and warm service so your work looks and feels premium.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg border border-amber-400/20 bg-black/40 p-4">
                <div className="text-2xl font-extrabold text-amber-300">500+</div>
                <div className="text-xs text-amber-100/70">Documents Delivered</div>
              </div>
              <div className="rounded-lg border border-amber-400/20 bg-black/40 p-4">
                <div className="text-2xl font-extrabold text-amber-300">200+</div>
                <div className="text-xs text-amber-100/70">Design Projects</div>
              </div>
              <div className="rounded-lg border border-amber-400/20 bg-black/40 p-4">
                <div className="text-2xl font-extrabold text-amber-300">100%</div>
                <div className="text-xs text-amber-100/70">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-yellow-500/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-[0_20px_80px_-30px_rgba(251,191,36,0.3)]">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-amber-400/10 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="mt-4 text-sm text-amber-100/80">
                A boutique studio and typing centre delivering refined outcomes with speed and care.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
