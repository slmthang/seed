
import { getUserById } from "@/app/(playground)/playground/dbtest/db";

export async function POST(request: Request) {
    const res = await request.json()

    const user = await getUserById(res!.userId);
    
    return Response.json(user)
}