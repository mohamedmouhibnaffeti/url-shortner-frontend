"use server"

import { checkIsURL } from "./string";

export const shortenUrl = async (originalUrl: string): Promise<{success: boolean, data?: string, message?: string}> => {
    if(!checkIsURL(originalUrl)){
        return {success: false, message: "Invalid URL"}
    }
    const response = await fetch(`${process.env.BACKEND_URL}/api/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }),
    });
    if(response.status !== 201){
        return {success: false, message: "Failed to shorten URL"}
    }else{
        const data = await response.json()
        return {success: true, data: data.shortUrl}
    }
}