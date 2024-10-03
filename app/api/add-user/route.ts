
import {  createUser } from "@/app/(playground)/playground/dbtest/db";
import { InsertUser } from "@/app/(playground)/playground/dbtest/schema";

export async function POST(request: Request) {
    const res : InsertUser = await request.json()

    let created = false;

    try {
        const user = await createUser(res);
        created = true;
    } catch (err) {
        throw Error("failed to add user")
    }
    
    
    return Response.json({created})
}