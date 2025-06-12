import { getAllSignals, insertSignal } from '@/lib/db';
import pool from '@/lib/pg-client';

  //const client = await pool.connect();

export async function GET() {
  try {
    const data = await getAllSignals();
    return Response.json(data);
  } catch (e) {
    return new Response('Error loading signals', { status: 500 });
  }
}

export async function POST(req: Request) {  
  //const client = await pool.connect();
  const formData = await req.formData();

  const symbol = formData.get('symbol')?.toString();
  const expiration = formData.get('expiration')?.toString();;
  const status = formData.get('status')?.toString();;
  const type = formData.get('type')?.toString();;

  if (!symbol || !expiration || !status || !type) {
    return new Response('Missing fields', { status: 400 });
  }

  try {
    await insertSignal({symbol,expiration,status,type});
    return new Response('OK');
  } catch (err) {
    console.error('Ошибка при вставке:', err);
    return new Response('Ошибка при вставке', { status: 500 });
  } 
}
