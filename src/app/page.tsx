import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link className="mr-4" href={'/server'}>Server</Link>
        <Link href={'/client'}>client</Link>
      </div>
    </>
  );
}
