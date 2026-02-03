// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="bg-[#fbf6f1] text-[#223614] w-full h-220 flex flex-row pt-28 overflow-x-hidden items-center font-regular">
        <div className="relative ml-14 bg-amber-400 h-full w-145 overflow-hidden rounded-t-[999px]">
          <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg" priority alt="hero-image" fill className="object-cover"
          />
        </div>
        <div className="h-full ml-42 pt-48 max-w-xl flex items-center flex-col">
          <h1 className="text-7xl font-medium leading-tight max-w-md text-center">Live your life in full bloom</h1>
          <p className="mt-6 text-lg">Therapy for adults in Minneapolis, MN</p>
          <button className="mt-10 border border-[#223614] px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#223614] hover:text-[#fbf6f1]">
            Connect with me
          </button>
        </div>
      </div>
    </main >
  );
}
