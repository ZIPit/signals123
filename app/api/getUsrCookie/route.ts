import { cookies } from "next/headers";

export async function GET(request:Request) {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;
    //const userId = '43452356';
    return Response.json({userId});
}