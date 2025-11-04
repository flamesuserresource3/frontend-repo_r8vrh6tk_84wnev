import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gold glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute -inset-10 [filter:blur(80px)] opacity-40" aria-hidden>
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-yellow-500/40" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-amber-400/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-black/40 px-4 py-1 text-xs tracking-widest text-amber-300 uppercase">
          Premium • Studio & Typing Centre
        </span>
        <h1 className="mt-6 bg-gradient-to-b from-amber-200 via-amber-300 to-yellow-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          SHINE
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-amber-100/80 sm:text-lg">
          Where precision meets creativity. We craft polished documents, professional designs, and memorable studio experiences — with a gold-standard touch.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-md bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-md border border-amber-400/40 bg-black/40 px-6 py-3 text-sm font-semibold text-amber-200 backdrop-blur transition hover:border-amber-300 hover:text-amber-100"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
