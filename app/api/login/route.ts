import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = await request.json(); 
    const userId = body.userId; 

  const cookieStore = await cookies(); 
  cookieStore.set('userId', userId, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'Logged in' }));
}