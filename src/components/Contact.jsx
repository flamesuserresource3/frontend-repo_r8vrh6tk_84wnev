import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.12),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-amber-300 sm:text-4xl">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-2xl text-amber-100/80">
            Reach out for quotes, quick jobs, or larger projects. We respond promptly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Card */}
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-zinc-900 to-black p-6">
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-300"><Phone size={18} /></div>
                <div>
                  <div className="text-amber-200">Phone / WhatsApp</div>
                  <a href="tel:+919999999999" className="text-amber-100/80 hover:text-amber-100">+91 99999 99999</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-300"><Mail size={18} /></div>
                <div>
                  <div className="text-amber-200">Email</div>
                  <a href="mailto:hello@shineluxe.in" className="text-amber-100/80 hover:text-amber-100">hello@shineluxe.in</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-300"><MapPin size={18} /></div>
                <div>
                  <div className="text-amber-200">Location</div>
                  <p className="text-amber-100/80">Main Market Road, City Centre, INDIA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-amber-300"><Clock size={18} /></div>
                <div>
                  <div className="text-amber-200">Hours</div>
                  <p className="text-amber-100/80">Mon–Sat: 9:30 AM – 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-b from-zinc-900 to-black p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`SHINE Enquiry — ${data.get('name')}`);
                const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\nMessage: ${data.get('message')}`);
                window.location.href = `mailto:hello@shineluxe.in?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-xs text-amber-200">Your Name</label>
                <input name="name" required className="w-full rounded-md border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-100/50 focus:border-amber-300 focus:outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-amber-200">Phone or Email</label>
                <input name="contact" required className="w-full rounded-md border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-100/50 focus:border-amber-300 focus:outline-none" placeholder="How can we reach you?" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-amber-200">Message</label>
                <textarea name="message" rows="4" required className="w-full rounded-md border border-amber-400/20 bg-black/40 px-3 py-2 text-amber-100 placeholder:text-amber-100/50 focus:border-amber-300 focus:outline-none" placeholder="Tell us about your requirement..." />
              </div>
              <button type="submit" className="w-full rounded-md bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-amber-400/10 pt-6 text-center text-xs text-amber-100/60">
          © {new Date().getFullYear()} SHINE — Studio & Typing Centre. All rights reserved.
        </div>
      </div>
    </section>
  );
}
