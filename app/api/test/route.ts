import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies(); 
  cookieStore.set('hello', 'world', { path: '/' });

  return new Response('Cookie set!');
};