// pages/timezone.tsx
'use client';
import { Globe, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const TimeZone = () =>{
  const [selectedZone, setSelectedZone] = useState<string>("UTC");

  const timezones = [
    "UTC",
    "GMT",
    "EST (New York)",
    "PST (Los Angeles)",
    "CST (Chicago)",
    "IST (India)",
    "CET (Europe)",
    "JST (Japan)",
    "AEST (Australia)",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Set Your Timezone</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Get trading signals adjusted to your local time. Never miss an opportunity.
        </p>
        <Clock className="mx-auto h-12 w-12 text-white opacity-80" />
      </section>

      {/* Timezone Selector */}
      <section className="py-14 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Select Your Preferred Timezone</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {timezones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`p-4 rounded-2xl border text-left transition font-semibold ${
                selectedZone === zone
                  ? "bg-teal-600 text-white border-teal-700 shadow-lg"
                  : "bg-white hover:bg-teal-50 text-gray-700 border-gray-300"
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Selected Timezone: <span className="font-bold text-teal-700">{selectedZone}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">You can change this anytime in your settings.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Timezone Syncing Matters</h2>
          <p className="text-gray-700 text-lg mb-6">
            Seeing signals in your local time ensures clarity, consistency, and faster action. Set it once, and trade confidently.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
            {[
              { icon: Clock, title: "Signal Timing", desc: "Get alerts based on your time — no conversion needed." },
              { icon: Globe, title: "Global Traders", desc: "We support traders from all regions and timezones." },
              { icon: CheckCircle, title: "No Missed Alerts", desc: "Avoid mistakes due to timezone confusion." },
            ].map((item, i) => (
              <div key={i} className="flex">
                <item.icon className="h-6 w-6 text-teal-600 mr-3 mt-1" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 px-6 bg-teal-700 text-white">
        <h2 className="text-3xl font-bold mb-4">You're All Set</h2>
        <p className="mb-6">Your signals will now match your local timezone: <span className="font-semibold">{selectedZone}</span></p>
        <Link href="/">
        <button className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition" >
          Go to Signals
        </button>
        </Link>
      </section>
    </div>
  );
}
export default TimeZone;