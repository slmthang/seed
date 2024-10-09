
import {  createUser } from "@/app/db/db";
import { InsertUser } from "@/app/db/schema/budgetPlanExpensesTable";

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