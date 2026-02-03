// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <main className="text-[#223614]">
      <div className="bg-[#fbf6f1] w-full h-220 flex flex-row pt-24 overflow-x-hidden items-center font-regular">
        <div className="relative ml-14 bg-amber-400 h-full w-145 overflow-hidden rounded-t-[999px]">
          <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg" priority alt="hero-image" fill className="object-cover"
          />
        </div>
        <div className="h-full ml-42 pt-48 max-w-xl flex items-center flex-col">
          <h1 className="text-7xl font-medium leading-tight max-w-md text-center">Live your life in full bloom</h1>
          <p className="mt-6 text-lg">Therapy for adults in Minneapolis, MN</p>
          <button className="mt-10 border border-[#223614] px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-[#223614] hover:text-[#fbf6f1] cursor-pointer">
            Connect with me
          </button>
        </div>
      </div>

      <div className="bg-[#e5e0da] flex flex-row justify-center items-center h-175">
        <div className="h-full w-1/2 flex flex-col justify-between items-start">
          <div className="max-w-3xl px-16 pt-52">
            <h2 className="font-medium text-6xl">Live a fulfilling life.</h2>
            <p className="mt-8 font-medium text-lg">Life can be challenging—especially when you're trying to balance your personal and professional life. </p>
            <p className="mt-6 font-medium text-lg">It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>
          </div>
          <button className="bg-transparent w-full border-t border-[#223614]/80 h-18 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-[#223614] hover:text-[#fbf6f1] cursor-pointer">GET IN TOUCH</button>
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w"
            alt="second-pic"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-[#fbf6f1] flex flex-col justify-between items-center h-200">
        <div>
          <h1 className="text-6xl font-medium pt-20">My Specialities</h1>
        </div>
        <div className="bg-amber-400 h-9/12 w-full flex flex-row px-20 py-8 gap-5">
          <div className="bg-[#e5e0da] h-135 w-1/3"></div>
          <div className="bg-[#e5e0da] h-135 w-1/3"></div>
          <div className="bg-[#e5e0da] h-135 w-1/3"></div>
        </div>
      </div>
    </main >
  );
}
