
'use client'
import { useState } from "react";
import { CheckCircle, Star, Zap, ShieldCheck, Bell, XCircle } from "lucide-react";




const Vip = ()=>{
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
const faqs = [
    {
      question: "What makes VIP signals different?",
      answer: "They’re faster, more detailed, and hand-picked by our top analysts.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No commitments, cancel anytime from your profile.",
    },
    {
      question: "Do I get support?",
      answer: "VIP users get priority support via chat/email.",
    },
  ];
    return (
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="text-center py-16 px-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Premium Trading Signals</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Get real-time, ad-free VIP signals from professional analysts. Stay ahead of the market.
            </p>
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Subscribe Now
            </button>
          </section>
    
          {/* Benefits */}
          <section className="py-14 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Go VIP?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Star, title: "High Accuracy Signals" },
                { icon: Bell, title: "Faster Alerts" },
                { icon: XCircle, title: "Ad-Free Experience" },
                { icon: ShieldCheck, title: "Expert Analysis" },
                { icon: Zap, title: "Exclusive Trades" },
                { icon: CheckCircle, title: "Priority Support" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                  <item.icon className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </section>
    
          {/* Pricing */}
          <section className="bg-white py-14 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Subscription Plans</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border rounded-2xl p-6 text-center">
                <p className="text-xl font-semibold mb-2">Monthly</p>
                <p className="text-3xl font-bold text-indigo-600 mb-4">$29</p>
                <p className="mb-6 text-gray-600">Full VIP access, real-time alerts, no ads</p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
                  Choose Plan
                </button>
              </div>
              <div className="border-2 border-indigo-600 rounded-2xl p-6 text-center relative bg-indigo-50">
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-sm px-3 py-1 rounded-bl-xl font-semibold">
                  Most Popular
                </span>
                <p className="text-xl font-semibold mb-2">Yearly</p>
                <p className="text-3xl font-bold text-indigo-600 mb-4">$249</p>
                <p className="mb-6 text-gray-700">Save 20%, includes bonus webinars</p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          </section>
    
        
    
          {/* FAQ */}
          <section className="py-14 px-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-4 border-b pb-4">
                <button
                  className="w-full text-left text-lg font-medium text-indigo-700"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                >
                  {faq.question}
                </button>
                {faqOpen === idx && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </section>
    
          {/* Final CTA */}
          <section className="text-center py-16 px-6 bg-indigo-700 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Trade Smarter?</h2>
            <p className="mb-6">Join VIP Now and Start Profiting Today</p>
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Subscribe Now
            </button>
          </section>
        </div>
      );
}
export default Vip;