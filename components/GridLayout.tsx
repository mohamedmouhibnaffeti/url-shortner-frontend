"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useState } from "react";
import { toast } from "sonner"
import { shortenUrl } from "@/helpers/APIs";
import { CopyIcon } from "lucide-react"
import { CopyString } from "@/helpers/string";

export function GridPatternComponent() {
  const [url, setUrl] = useState("")
  const SendRequest = async() => {
    const response = await shortenUrl(url)
    if(response.success){
      toast.success(`${response.data}`, {
        action: {
          label: <CopyIcon className="w-4 h-4" />,
          onClick: () => CopyString(response.data as string),
        },
      })
    }else{
      toast.error(`${response.message}`)
    }
  }
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-black gap-6">
      <h1 className="z-10 md:text-6xl text-4xl font-bold text-white text-center tracking-wide">
        🚀 Shorten. Share. Track.
      </h1>
      <h3 className="z-10 md:text-2xl text-lg text-white text-center tracking-wide">
        Turn long links into sleek, shareable URLs.<br />fast, simple, and powerful.
      </h3>
      <div className="flex gap-4 md:gap-2 w-full max-md:flex-col justify-center items-center">
        <input
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          className="z-10 md:w-96 w-full px-4 py-2 text-lg text-white bg-black/20 border focus:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-r- transition-all duration-150"
        />
        <button
          onClick={SendRequest}
          disabled={!url}
          className={cn(
            "z-10 px-6 py-2 text-lg text-white bg-blue-500 border border-blue-500 rounded-lg rounded-l- transition-all duration-150 w-fit",
            "hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600/80 active:border-blue-600/80",
          )}>
            Convert
          </button>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 20],
          [20, 25],
          [25, 20],
        ]}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
