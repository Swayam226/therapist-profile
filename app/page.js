// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="bg-[#fbf6f1] text-[#223614] w-full h-220 flex flex-row pt-10 overflow-x-hidden items-center font-regular">
        <div className="relative ml-14 bg-amber-400 h-full w-145 overflow-hidden rounded-t-[999px]">
          <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg" priority alt="hero-image" fill className="object-cover"
          />
        </div>
        <div className="text-[#223614] text-8xl">
          <span>Live Your Life in Full Bloom</span>
        </div>
      </div>
    </main >
  );
}
