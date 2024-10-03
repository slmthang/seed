
'use client'
import { useEffect } from "react"


export default function Home() {

    useEffect(() => {
        async function fetchUser() {
            fetch('http://localhost:3000/app/api/user', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ keyword: 'menaiala' }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        fetchUser();
    })

    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <h1>hello</h1>
        </div>
    )
}