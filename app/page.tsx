import { GridPatternComponent } from "@/components/GridLayout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen">
      <GridPatternComponent />
    </div>
  );
}
