// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";

export const metadata = {
  title: "Therapy in Minneapolis | Live Your Life in Full Bloom",
  description:
    "Therapy for adults in Minneapolis helping with burnout, relationships, and self-esteem. Connect today.",
};


export default function Home() {
  return (
    <main className="text-[#223614]">
      <section className="bg-[#fbf6f1] w-full h-220 flex flex-row pt-24 overflow-x-hidden items-center font-regular">
        <div className="relative ml-14 h-full w-145 overflow-hidden rounded-t-[999px]">
          <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg" priority fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw"
            alt="Bright therapy office with natural light"
          />
        </div>
        <div className="h-full ml-42 pt-48 max-w-xl flex items-center flex-col">
          <h1 className="text-7xl font-medium leading-tight max-w-md text-center">Live your life in full bloom</h1>
          <p className="mt-6 text-lg">Therapy for adults in Minneapolis, MN</p>
          <button className="mt-10 border border-[#223614] px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-[#223614] hover:text-[#fbf6f1] cursor-pointer">
            Connect with me
          </button>
        </div>
      </section>

      <section className="bg-[#e5e0da] flex flex-row justify-center items-center h-175">
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
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>


      <section className="bg-[#fbf6f1] flex flex-col justify-between items-center h-200">
        <div>
          <h2 className="text-5xl font-medium pt-20">My Specialities</h2>
        </div>
        <div className="bg-[#fbf6f1] h-9/12 w-full flex flex-row px-20 py-8 gap-5">
          <article className="bg-[#e5e0da] h-125 w-1/3 flex flex-col">
            <p className="text-lg px-5 py-3">Self-Esteem</p>
            <p className="text-sm px-5 py-3">Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w"
                alt="card-image-1"
                fill
                className="object-cover"
              />
            </div>
          </article>

          <article className="bg-[#e5e0da] h-125 w-1/3 flex flex-col">
            <p className="text-lg px-5 py-3">Relationships</p>
            <p className="text-sm px-5 py-3">Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.</p>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w"
                alt="card-image-2"
                fill
                className="object-cover"
              />
            </div>
          </article>

          <article className="bg-[#e5e0da] h-125 w-1/3 flex flex-col">
            <p className="text-lg px-5 py-3">Burnout</p>
            <p className="text-sm px-5 py-3">Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.</p>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w"
                alt="card-image-1"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#e5e0da] flex flex-row justify-center items-center h-210">
        <div className="relative h-full w-1/2">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w"
            alt="second-pic"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-[#c2bfcb] h-full w-1/2 flex flex-col justify-between items-start">
          <div className="max-w-3xl px-16 pt-42">
            <h2 className="font-medium text-5xl max-w-150">You don't have to do this all alone.</h2>
            <p className="mt-8 font-medium text-xl">If you are facing any of these, there's hope:</p>
            <ul className="mt-8 font-medium text-xl list-disc pl-10 flex flex-col gap-4">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>
            <p className="mt-10 font-medium text-xl">With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
          </div>
          <button className="bg-transparent w-full border-t border-[#223614]/80 h-18 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-[#223614] hover:text-[#fbf6f1] cursor-pointer">WORK WITH ME</button>
        </div>

      </section>
    </main >
  );
}
