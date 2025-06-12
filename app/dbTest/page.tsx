// File: app/page.tsx
'use client';

import { useEffect, useState } from 'react';

type Signal = {
  signal_id: number;
  symbol: string;
  expiration: string;
  status: string;
  type: string;
};

export default function SignalForm() {
  const [signals, setSignals] = useState<Signal[]>([]);

  async function loadSignals() {
    const res = await fetch('/api/signals');
    const data = await res.json();
    setSignals(data);
  }

  useEffect(() => {
    loadSignals();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await fetch('/api/signals', {
      method: 'POST',
      body: formData,
    });

    await loadSignals(); // Обновить список после отправки
  }
 
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Set the asset" name="symbol" />
      <select name ="status" defaultValue="ACTIVE">
        <option value="Active">ACTIVE</option>
        <option value="Archived">ARCHIVED</option>
        <option value="Upcoming">UPCOMING</option>
        </select>
      <select name="expiration" defaultValue="">
        <option value="" disabled>Set the expiration</option>
        <option value="1">1 min</option>
        <option value="2">2 min</option>
        <option value="5">5 min</option>
    </select>

    <select name="type" defaultValue="BUY">
        <option value="Buy">BUY</option>
        <option value="Sell">SELL</option>    
    </select> 
    <br/>
      <button type="submit">Submit</button>
    </form>
    <div>
        <h2> Сигналы:</h2>
        <ul className="space-y-2">
           { signals.map((s)=>(<li key={s.signal_id} className="border p-2 rounded">{s.symbol}</li>
           ))}
        </ul>
    </div>

    </div>
  );
}