
'use client'
import { useEffect, useState , useContext} from "react"
import { AppDataContext } from "@/app/lib/contexts";
import { AppDataType } from "../lib/definitions";

export default function Home() {

    const AppData : AppDataType= useContext(AppDataContext);
    const user = AppData.user;

    function formatDate(date: Date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    return (
        <div className=" w-screen h-dvh min-h-dvh overflow-y-scroll pt-[5rem]">
            <h1>Name: {user.firstName + ' ' + user.lastName}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Joined: {formatDate(user.joined)}</h1>
        </div>
    )
}