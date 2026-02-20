"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
        <span className="fade-up text-[11px] tracking-[0.3em] uppercase text-gold font-medium block mb-4">
          Stay Connected
        </span>
        <h2 className="fade-up stagger-1 font-display text-3xl lg:text-5xl text-navy-950 font-light">
          Join the <span className="italic">Crew</span>
        </h2>
        <p className="fade-up stagger-2 mt-4 text-navy-600 text-sm max-w-md mx-auto leading-relaxed">
          Be the first to discover new collections, exclusive sailing events,
          and special offers. No spam — just the good stuff.
        </p>

        {/* Form */}
        <div className="fade-up stagger-3 mt-10 max-w-lg mx-auto">
          {submitted ? (
            <div className="py-4 text-[13px] tracking-[0.1em] text-gold font-medium">
              Welcome aboard! Check your inbox. ⛵
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-4 bg-white border border-sand-200 text-navy-900 text-[13px] tracking-wide placeholder:text-navy-400/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-navy-950 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-gold transition-colors duration-400 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Social */}
        <div className="fade-up stagger-4 mt-12 flex items-center justify-center gap-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-navy-500">
            Follow us
          </span>
          <div className="h-[1px] w-8 bg-sand-300" />
          {[
            { name: "Instagram", href: "https://www.instagram.com/codezerosportswear/" },
            { name: "Facebook", href: "#" },
            { name: "LinkedIn", href: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.15em] uppercase text-navy-600 hover:text-gold transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
