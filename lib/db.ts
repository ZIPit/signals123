// lib/db.ts
import pool from './pg-client';

export async function getAllComments() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM comments');
    return res.rows;
  } finally {
    client.release();
  }
}

export async function getLatestUsers() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM users ORDER BY created_at DESC LIMIT 5');
    return res.rows;
  } finally {
    client.release();
  }
}

export async function getAllSignals() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM signal ORDER BY created_at DESC');
    return res.rows;
    } finally {
    client.release();
    }
}

export async function insertSignal({
  symbol,
  status,
  expiration,
  type,
}: {
  symbol: string;
  status: string;
  expiration: string;
  type: string;
}) {
  const client = await pool.connect();

  try {
    await client.query(
      `INSERT INTO signal (symbol, status, expiration, type, created_at, signal_dt)
       VALUES ($1, $2, $3, $4, current_timestamp, current_timestamp+ interval '1 minute')`,
      [symbol, status, expiration, type]
    );
    return new Response('OK');
  } catch (err) {
    console.error('Ошибка при вставке:', err);
    return new Response('Ошибка при вставке', { status: 500 });
  } finally {
    client.release();
  }
}
