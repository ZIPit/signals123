'use client';
import { ArrowUpRight, ArrowDownLeft, Clock, CircleCheck, Archive } from "lucide-react";
import { useEffect, useState } from "react";
import { cookies } from 'next/headers';

declare global {
  interface Window {
    Telegram?:{
      WebApp?: any
    }
  }

}


export default function Home() {
  type Signal = {
    symbol: string;
    status: "Active" | "Archived" | "Upcoming";
    expiration: string;
    type: "Buy" | "Sell";
  };


  const signals:Signal[] = [
    {
      symbol: "EUR/USD",
      status: "Active",
      expiration: "1 min",
      type: "Buy",
    },
    {
      symbol: "BTC/USDT",
      status: "Upcoming",
      expiration: "5 min",
      type: "Sell",
    },
    {
      symbol: "GOLD",
      status: "Archived",
      expiration: "20 min",
      type: "Buy",
    },
    {
      symbol: "GBP/JPY",
      status: "Active",
      expiration: "3 min",
      type: "Sell",
    },
  ];

  const statusStyles = {
    Active: "bg-green-100 text-green-700",
    Archived: "bg-gray-100 text-gray-600",
    Upcoming: "bg-yellow-100 text-yellow-700",
  };

  const typeStyles = {
    Buy: "bg-blue-100 text-blue-700",
    Sell: "bg-red-100 text-red-700",
  };

 const [telegramId,setTelegramId] = useState<string|null>(null)

  useEffect(()=>{
    if (window.Telegram?.WebApp) {
      
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      if (initDataUnsafe?.user?.id) {
        const userId = initDataUnsafe.user.id.toString();
        setTelegramId(userId);
        alert('TelegramID is ' + userId);
        
        fetch('/api/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId:'22222'}),

        });
      }
      else {console.log("no telegram found. Can't init WebApp")}
        
    } 
    else {alert("no telegram found. window object is empty")}
  },[])


  

  return (    
    <div className="bg-gray-50 min-h-screen text-gray-800">      
      {/* Header */}
      <section className="text-center py-14 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-2">Live Trading Signals</h1>
        <p className="text-lg">Track and follow the latest trading opportunities in real time.</p>
      </section>

      {/* Table */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="overflow-x-auto rounded-2xl shadow bg-white">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-4">Symbol</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Expiration</th>
                <th className="px-6 py-4">Operation</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              {signals.map((signal: Signal, i:number) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">{signal.symbol}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[signal.status]}`}>
                      {signal.status === "Active" && <CircleCheck className="h-4 w-4 mr-1" />}
                      {signal.status === "Archived" && <Archive className="h-4 w-4 mr-1" />}
                      {signal.status === "Upcoming" && <Clock className="h-4 w-4 mr-1" />}
                      {signal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{signal.expiration}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeStyles[signal.type]}`}>
                      {signal.type === "Buy" ? (
                        <>
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          Buy
                        </>
                      ) : (
                        <>
                          <ArrowDownLeft className="h-4 w-4 mr-1" />
                          Sell
                        </>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
