// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";
import Faq from "@/components/Faq";
import ProfBackground from "@/components/ProfBackground";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Therapy in Minneapolis | Live Your Life in Full Bloom",
  description:
    "Therapy for adults in Minneapolis helping with burnout, relationships, and self-esteem. Connect today.",
};


export default function Home() {
  return (
    <main className="text-ink">
      <section className="bg-sand w-full h-220 flex flex-row pt-24 overflow-x-hidden items-center font-regular border-t border-ink/5
">

        <div className="relative ml-14 h-full w-145 overflow-hidden rounded-t-[999px]">
          <Reveal className="block w-full h-full">
            <div className="absolute inset-0">
              <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg" priority fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw"
                alt="Bright therapy office with natural light"
              />
            </div>
          </Reveal>
        </div>
        <div className="h-full ml-42 pt-48 max-w-xl flex items-center flex-col">
          <Reveal>
            <h1 className="text-7xl font-medium leading-tight max-w-md text-center font-serif ">Live your life in full bloom</h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-lg">Therapy for adults in Minneapolis, MN</p>
          </Reveal>
          <Reveal>
            <button className="mt-10 border border-moss px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-moss hover:text-sand cursor-pointer">
              Connect with me &#x2192;
            </button>
          </Reveal>
        </div>
      </section>

      <section className="bg-clay flex flex-row justify-center items-center h-175">
        <div className="h-full w-1/2 flex flex-col justify-between items-start">
          <div className="max-w-3xl px-16 pt-52">
            <Reveal><h2 className="font-medium text-6xl">Live a fulfilling life.</h2></Reveal>
            <Reveal><p className="mt-8 font-medium text-lg">Life can be challenging—especially when you're trying to balance your personal and professional life. </p></Reveal>
            <Reveal><p className="mt-6 font-medium text-lg">It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p></Reveal>
          </div>
          <button className="bg-transparent w-full border-t border-moss/80 h-18 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-moss hover:text-sand cursor-pointer">GET IN TOUCH &#x2192;</button>
        </div>
        <div className="relative h-full w-1/2">
          <Reveal className="block w-full h-full">
            <div className="absolute inset-0">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w"
                alt="second-pic"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="bg-sand flex flex-col justify-between items-center h-200">
        <div>
          <h2 className="text-5xl font-medium pt-20">My Specialities</h2>
        </div>
        <div className="bg-sand h-9/12 w-full flex flex-row px-20 py-8 gap-5">

          <article className="bg-clay h-125 w-1/3 flex flex-col">
            <Reveal><p className="text-lg px-5 py-3">Self-Esteem</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w"
                    alt="card-image-1"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </article>

          <article className="bg-clay h-125 w-1/3 flex flex-col">
            <Reveal><p className="text-lg px-5 py-3">Relationships</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w"
                    alt="card-image-2"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </article>

          <article className="bg-clay h-125 w-1/3 flex flex-col">
            <Reveal><p className="text-lg px-5 py-3">Burnout</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full"></Reveal>
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

      <section className="bg-clay flex flex-row justify-center items-center h-210">
        <div className="relative h-full w-1/2">
          <Reveal className="block w-full h-full"></Reveal>
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=1500w"
            alt="second-pic"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-panel h-full w-1/2 flex flex-col justify-between items-start">
          <div className="max-w-3xl px-16 pt-42">
            <Reveal><h2 className="font-medium text-5xl max-w-150">You don't have to do this all alone.</h2></Reveal>
            <Reveal><p className="mt-8 font-medium text-xl">If you are facing any of these, there's hope:</p></Reveal>
            <Reveal><ul className="mt-8 font-medium text-xl list-disc pl-10 flex flex-col gap-4">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul></Reveal>
            <Reveal><p className="mt-10 font-medium text-xl">With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p></Reveal>
          </div>
          <button className="bg-transparent w-full border-t border-moss/80 h-18 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-moss hover:text-sand cursor-pointer">WORK WITH ME &#x2192;</button>
        </div>
      </section>

      <section className="bg-clay flex flex-row justify-center items-center h-225 gap-25">
        <div className="w-2/5 h-full flex flex-col justify-center items-start gap-7 mb-30">
          <Reveal><h2 className="text-6xl">Hi, I'm Lilac</h2></Reveal>
          <Reveal><p className="max-w-165 font-medium text-xl leading-8">I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p></Reveal>
          <div className="flex justify-center items-center w-full pr-20">
            <button className="mt-10 border border-moss px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-moss hover:text-sand cursor-pointer">
              LET'S CHAT &#x2192;
            </button>
          </div>
        </div>

        <div className="relative h-158 w-110 mb-30">
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px]">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
                  fill
                  priority
                  className="object-cover"
                  alt="main"
                />
              </div>
            </Reveal>
          </div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full overflow-hidden">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=1500w"
                  fill
                  className="object-cover"
                  alt="circle"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand flex flex-row justify-center items-center h-200 gap-25">
        <div className="relative h-158 w-110 mb-30">
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px]">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
                  fill
                  priority
                  className="object-cover"
                  alt="main"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="w-2/5 h-full flex flex-col justify-center items-start gap-7 mb-30">
          <Reveal><h2 className="text-6xl">FAQs</h2></Reveal>
          <Reveal><Faq /></Reveal>
        </div>
      </section>

      <section className="bg-clay h-150 flex flex-col items-center justify-center gap-10">
        <Reveal><h2 className="text-5xl">My Professional Background</h2></Reveal>
        <ProfBackground />
      </section>

      <section className="bg-moss text-sand h-120 flex flex-col gap-8 justify-center items-center">
        <Reveal><h2 className="text-5xl">Get Started Today.</h2></Reveal>
        <Reveal><p className="text-xl max-w-170 text-center">Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p></Reveal>

        <button className="bg-transparent w-52 border border-white/80 h-12 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-clay hover:text-moss cursor-pointer">GET IN TOUCH &#x2192;</button>
      </section>

      <section className="w-full h-90 bg-sand text-ink flex flex-row justify-between items-center">
        <div className="flex flex-col gap-7 justify-center items-start px-10">
          <Reveal><h1 className="text-5xl">
            Lilac Template
          </h1></Reveal>
          <Reveal><p className="text-xl max-w-60">123 Example Road
            Minneapolis, MN
          </p></Reveal>
          <Reveal><p className="text-xl max-w-60">email@example.com
            (555) 555-5555</p></Reveal>
        </div>
        <div className="flex flex-col justify-start h-54 gap-7 pl-100">
          <Reveal><h1 className="text-4xl">Hours</h1></Reveal>
          <span className="text-xl max-w-40">Monday - Friday 10am - 6pm</span>
        </div>

        <div className="flex flex-col gap-5 px-10 h-54">
          <Reveal><h1 className="text-4xl">Find</h1></Reveal>
          <Link href="/" className="text-xl underline">Home</Link>
          <Link href="/contact" className="text-xl underline">Contact</Link>
          <Link href="/blog" className="text-xl underline">Blog</Link>
        </div>

      </section >
    </main >
  );
}
