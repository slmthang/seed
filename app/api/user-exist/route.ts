

import { userExist } from "@/app/db/db";

export async function POST(request: Request) {
    const res = await request.json()

    const existStatus = await userExist(res!.userId);
    
    return Response.json({exist: existStatus})
}