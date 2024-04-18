import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-tl from-slate-800 to-slate-700 flex min-h-screen flex-col items-center justify-center p-24">
      <Image src="/LOGO.png" alt="Logo" width={500} height={500} />
      <Link href="/home">
        <Button className="mt-4 bg-gradient-to-tl from-sky-600 to-sky-800 border border-white">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
