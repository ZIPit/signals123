import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const userId = '234';

  const cookieStore = await cookies(); // ⬅️ просто вызов, без await
  cookieStore.set('userId', userId, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'Logged in' }));
}