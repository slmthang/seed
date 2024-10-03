;'use server'
import { cookies } from "next/headers";

export async function setUserIdCookie(id :string) {
    cookies().set({
        name: 'pockeepxd',
        value: id,
        httpOnly: true,
        path: '/',
        maxAge: 86400
    })
}