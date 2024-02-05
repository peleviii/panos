"use client"
import Hero from "@/components/organisms/hero";
import Encryption from "@/components/organisms/encryption";
import Project from "@/components/organisms/project";
import Worthtobuy from "@/components/organisms/worthtobuy";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col h-full gap-20">
        <Hero/>
        <Encryption/>
        <Worthtobuy/>
        <Project/>
      </div>
    </main>
  );
}
