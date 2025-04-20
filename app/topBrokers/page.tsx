'use client';
import { Star, ShieldCheck, Globe, CheckCircle } from "lucide-react";
const TopBrokers = () => {
    const brokers = [
        {
          name: "TradeProFX",
          rating: 4.8,
          description: "Best for forex traders. Tight spreads and fast execution.",
          features: ["Regulated", "Low Spreads", "24/7 Support"],
          link: "#",
        },
        {
          name: "GlobalMarkets",
          rating: 4.6,
          description: "Wide asset variety and strong mobile experience.",
          features: ["Multi-asset", "Mobile App", "Education Tools"],
          link: "#",
        },
        {
          name: "ZenTrade",
          rating: 4.7,
          description: "User-friendly UI and powerful charting tools.",
          features: ["Beginner Friendly", "Charting Tools", "Copy Trading"],
          link: "#",
        },
      ];
      return (
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Broker</h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Compare top-rated brokers and choose the one that fits your trading style and goals.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Start Comparing
            </button>
          </section>
    
          {/* Broker Cards */}
          <section className="py-14 px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Top Broker Picks</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {brokers.map((broker, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{broker.name}</h3>
                    <span className="flex items-center text-yellow-500 font-semibold">
                      <Star className="h-5 w-5 fill-yellow-400 mr-1" /> {broker.rating}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{broker.description}</p>
                  <ul className="space-y-2 mb-6">
                    {broker.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={broker.link}
                    className="block text-center bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Visit Broker
                  </a>
                </div>
              ))}
            </div>
          </section>
    
          {/* Why Brokers Matter */}
          <section className="py-14 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choosing the Right Broker Matters</h2>
              <p className="text-gray-700 text-lg mb-6">
                The broker you choose affects everything — from trade execution to fees to your peace of mind. We’ve researched top platforms to help you make an informed decision.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                {[
                  { icon: ShieldCheck, title: "Security & Regulation", desc: "Only verified and licensed brokers are listed." },
                  { icon: Globe, title: "Global Access", desc: "Trade across markets: forex, crypto, stocks, indices." },
                  { icon: CheckCircle, title: "Performance", desc: "Low latency execution and minimal slippage." },
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <item.icon className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* FAQs */}
          <section className="py-14 px-6 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            {[
              {
                question: "How do I choose the best broker?",
                answer:
                  "Consider your trading goals, asset types, fee structure, and platform features. Our listed brokers are a great place to start.",
              },
              {
                question: "Are these brokers regulated?",
                answer:
                  "Yes. We only feature brokers that are fully licensed and regulated in their operating jurisdictions.",
              },
              {
                question: "Can I use multiple brokers?",
                answer: "Absolutely. Many traders use different brokers for different markets or strategies.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="mb-6 border-b pb-4">
                <p className="text-lg font-medium text-blue-700 mb-2">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </section>
    
          {/* Final CTA */}
          <section className="text-center py-16 px-6 bg-blue-700 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="mb-6">Pick a trusted broker and take your first step into the markets.</p>
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
              Explore Brokers Now
            </button>
          </section>
        </div>
      );
}
export default TopBrokers;