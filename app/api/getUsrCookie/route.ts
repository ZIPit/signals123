import { cookies } from "next/headers";

export async function GET(request:Request) {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;
    return Response.json({userId});
}