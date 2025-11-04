import React from 'react';
import { Keyboard, FileText, PenTool, Camera } from 'lucide-react';

const services = [
  {
    title: 'Professional Typing',
    description:
      'Fast, accurate typing for documents, applications, forms, and academic work with meticulous proofreading.',
    icon: Keyboard,
  },
  {
    title: 'Document Formatting',
    description:
      'Premium layouts for resumes, reports, proposals, and certificates — export-ready and print-perfect.',
    icon: FileText,
  },
  {
    title: 'Design & Branding',
    description:
      'Logos, posters, visiting cards, and digital creatives with a refined, luxurious gold-on-black aesthetic.',
    icon: PenTool,
  },
  {
    title: 'Photo / Studio Services',
    description:
      'ID photos, retouching, studio shoots, and event coverage with pro lighting and color grading.',
    icon: Camera,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-amber-300 sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-amber-100/80">
            Premium quality, prompt delivery, and a polished finish in every project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-amber-400/20 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-[0_10px_40px_-15px_rgba(251,191,36,0.25)] transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-500/10 blur-2xl" aria-hidden />
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 text-black shadow-amber-500/30 shadow-md">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-amber-200">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
