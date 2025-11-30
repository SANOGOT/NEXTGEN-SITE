/*
NextGen Solar - Single-file React App (Tailwind CSS)

Instructions:
1. Save this file as src/App.jsx in a Create React App or Vite + React project configured with Tailwind CSS.
2. Put the provided logo at /public/logo.png (or update the path below).
3. Tailwind must be configured. This component uses Tailwind utility classes only.
4. Optional: replace placeholder images in /public/images/ with your own.
5. This file is intentionally single-file to make previewing easier. Split into components as needed.

Features included:
- Hero section with CTA
- Programs (Solar Kits, Micro-systems, Training)
- Impact & Metrics
- Partner/Donor CTA and tailored donor section
- Newsletter/donation form (stubbed; integrate with Stripe/Donorbox/your provider)
- Contact form (stubbed)
- Footer with quick links and social links

Note: This file does not include server-side form handlers. Replace form action handlers with your chosen form backend or service.
*/

import React from "react";

// Recommended: put your uploaded logo in the public folder at /public/logo.png
// If you need to point to a local filesystem path for testing, use an absolute URL or
// escape backslashes (e.g. "C:\\path\\to\\image.png") — but in most React setups
// referencing /logo.png is the simplest and portable approach.
const logoPath = "/C:\\Users\\tidia\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-11-14 181712.png"; // put the uploaded logo in public/logo.png

const stats = [
  { label: "Clinics Equipped", value: "800+" },
  { label: "Mothers & Babies Supported", value: "120,000+" },
  { label: "CO\u2082 Avoided", value: "1,200 tons" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <Programs />
        <Impact />
        <TailoredDonor />
        <HowItWorks />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoPath} alt="NextGen Solar" className="h-10 w-auto object-contain" />
          <div>
            <h1 className="text-lg font-extrabold">NextGen Solar</h1>
            <p className="text-xs text-slate-500">Light that saves lives</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#programs" className="text-sm hover:underline">Programs</a>
          <a href="#impact" className="text-sm hover:underline">Impact</a>
          <a href="#donors" className="text-sm hover:underline">Donors</a>
          <a href="#get-involved" className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-medium">Donate</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">Powering Safe Deliveries — One Clinic at a Time</h2>
        <p className="mt-4 text-lg text-slate-700">NextGen Solar provides clinical-grade solar lighting and sustainable power solutions to remote clinics, helping reduce maternal and neonatal mortality by ensuring safe, well-lit medical care 24/7.</p>
        <div className="mt-6 flex gap-4">
          <a href="#donate" className="px-5 py-3 bg-orange-500 text-white rounded-md font-semibold">Donate Now</a>
          <a href="#programs" className="px-5 py-3 border border-slate-300 rounded-md text-slate-700">Our Programs</a>
        </div>

        <div className="mt-8 flex gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-tr from-orange-50 to-white p-6 rounded-2xl shadow-md">
        <img src="/images/clinic-solar.jpg" alt="clinic solar" className="w-full h-72 object-cover rounded-lg" />
        <p className="mt-4 text-slate-600">Durable, medical-grade solar lighting installed in rural clinics increases safety and clinical capacity—especially at night.</p>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="mt-16">
      <h3 className="text-2xl font-bold">Programs & Services</h3>
      <p className="mt-2 text-slate-600">We deliver turnkey solutions that combine hardware, training, and maintenance to create lasting impact.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <Card title="Solar Medical Lighting Kits" copy="Clinical-grade LED lighting kits designed for delivery rooms and emergency care. 24–48 hr battery backup, ruggedized for harsh environments." />
        <Card title="Clinic Micro-Systems" copy="Small micro-grids that support lighting across multiple rooms and power for essential equipment like vaccine fridges or fetal monitors." />
        <Card title="Training & Maintenance" copy="Hands-on training for healthcare staff and local technicians plus remote diagnostics and annual maintenance plans to ensure long-term uptime." />
      </div>
    </section>
  );
}

function Card({ title, copy }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-3 text-slate-600">{copy}</p>
      <div className="mt-4">
        <a className="text-orange-600 text-sm font-medium hover:underline" href="#contact">Request a Quote</a>
      </div>
    </div>
  );
}

function Impact() {
  return (
    <section id="impact" className="mt-16">
      <h3 className="text-2xl font-bold">Impact & Monitoring</h3>
      <p className="mt-2 text-slate-600">We measure the life-saving impact of lighting deployments and report transparently to donors and health partners.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold">Measured Outcomes</h4>
          <ul className="mt-3 text-slate-600 list-disc list-inside">
            <li>Number of clinics electrified</li>
            <li>Safe deliveries supported</li>
            <li>Reduction in kerosene usage</li>
            <li>CO₂ emissions avoided</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold">Data & Reporting</h4>
          <p className="mt-3 text-slate-600">Field-collected surveys, remote telemetry (optional), and integration with government health data to track outcomes and refine programs.</p>
        </div>
      </div>
    </section>
  );
}

function TailoredDonor() {
  return (
    <section id="donors" className="mt-16 bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Partner with Us — Tailored Donor Programs</h3>
          <p className="mt-2 text-slate-700">We design donor-specific deployments and reporting packages. Whether you're a foundation, corporate CSR program, or a government agency, we tailor impact metrics, branding, and program scope to meet your strategic objectives.</p>
          <ul className="mt-4 text-slate-600 list-disc list-inside">
            <li>Branded deployment programs</li>
            <li>Custom monitoring dashboards</li>
            <li>Co-funded pilot and scale-up models</li>
          </ul>
        </div>
        <div className="text-right">
          <a href="#contact" className="px-4 py-3 bg-slate-900 text-white rounded-md">Request Donor Brief</a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold">How It Works</h3>
      <div className="mt-6 grid md:grid-cols-4 gap-4">
        <Step num={1} title="Assess" copy="Site selection, baseline health data, and partner alignment." />
        <Step num={2} title="Deploy" copy="Manufacture, ship, and install with local teams and partners." />
        <Step num={3} title="Train" copy="Hands-on training for clinical users and local technicians." />
        <Step num={4} title="Sustain" copy="Ongoing maintenance, monitoring, and government handover." />
      </div>
    </section>
  );
}

function Step({ num, title, copy }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="h-12 w-12 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">{num}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-slate-600 text-sm">{copy}</p>
    </div>
  );
}

function GetInvolved() {
  return (
    <section id="get-involved" className="mt-16">
      <h3 className="text-2xl font-bold">Get Involved</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold">Donate</h4>
          <p className="mt-2 text-slate-600">Your gift powers installations, trains local teams, and keeps clinics lit. We provide donor reports and impact stories.</p>
          <div className="mt-4">
            {/* Integrate with Stripe/Donorbox/etc. */}
            <a href="#donate" className="px-4 py-3 bg-orange-500 text-white rounded-md">Make a Gift</a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold">Partner</h4>
          <p className="mt-2 text-slate-600">Foundations, corporates, and governments can co-design country programs, sponsor pilots, and fund scaling efforts.</p>
          <div className="mt-4">
            <a href="#contact" className="px-4 py-3 border border-slate-300 rounded-md">Contact Our Partnerships Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h3 className="text-2xl font-bold">Contact & Inquiries</h3>
      <p className="mt-2 text-slate-600">For donor-tailored proposals, technical specs, or partnership discussions, reach out to us.</p>

      <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
        <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted (stub). Integrate with backend.'); }}>
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="p-3 border rounded-md" />
            <input required placeholder="Email" type="email" className="p-3 border rounded-md" />
          </div>
          <textarea required placeholder="Message" className="mt-4 p-3 w-full border rounded-md" rows={4} />
          <div className="mt-4 flex items-center gap-4">
            <button type="submit" className="px-4 py-3 bg-slate-900 text-white rounded-md">Send Message</button>
            <span className="text-slate-500 text-sm">Or email us at <strong>info@nextgensolar.org</strong></span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <img src={logoPath} alt="NextGen Solar" className="h-12" />
          <p className="mt-3 text-slate-600 text-sm">NextGen Solar is a 501(c)(3) non-profit dedicated to delivering solar-powered lighting to remote clinics and improving maternal and neonatal outcomes.</p>
        </div>

        <div className="flex gap-12">
          <div>
            <h5 className="font-semibold">Programs</h5>
            <ul className="mt-3 text-sm text-slate-600">
              <li>Solar Lighting Kits</li>
              <li>Micro-Systems</li>
              <li>Training & Maintenance</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-3 text-sm text-slate-600">
              <li>Donate</li>
              <li>Partnerships</li>
              <li>Volunteer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} NextGen Solar Inc. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:underline">Privacy</a>
            <a href="#" className="text-slate-500 hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
