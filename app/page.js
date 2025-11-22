"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div>
      <h2>Harsh's Website</h2>
      <Button>subscribe</Button>
    </div>
  
  );
}
