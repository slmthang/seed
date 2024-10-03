

import { userExist } from "@/app/(playground)/playground/dbtest/db";

export async function POST(request: Request) {
    const res = await request.json()

    const existStatus = await userExist(res!.userId);
    
    return Response.json({exist: existStatus})
}