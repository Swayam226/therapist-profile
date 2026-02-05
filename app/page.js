// import Counter from "@/components/Counter";
// import Header from "@/components/header";
import Image from "next/image";
import Faq from "@/components/Faq";
import ProfBackground from "@/components/ProfBackground";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Office from "@/components/Office";

export const metadata = {
  title: "Therapy in Santa Monica by Dr. Maya Reynolds, PsyD",
  description:
    "Therapy for adults in Santa Monica helping with anxiety, trauma and burnout in a calm and safe environment",
};


export default function Home() {
  return (
    <main className="text-ink">
      <section className="bg-sand w-full min-h-screen md:h-220 flex flex-col md:flex-row pt-40 md:pt-24 overflow-x-hidden items-center font-regular border-t border-ink/5
">
        <div className="relative md:ml-14 h-76 md:h-full w-52 md:w-145 overflow-hidden rounded-t-[999px]">
          <Reveal className="block w-full h-full">
            <div className="absolute inset-0">
              <Image src="/assets/break-free.jpg" priority fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw"
                alt="A woman breaking jumping to symbolize breaking free"
              />
            </div>
          </Reveal>
        </div>
        <div className="h-full md:ml-42 pt-12 md:pt-30 max-w-xl flex items-center flex-col px-6 md:px-0">
          <Reveal>
            <h1 className="text-4xl md:text-7xl font-medium leading-tight max-w-md text-center font-serif">
              Break Free from <span className="italic">Anxiety</span> and <span className="italic">Trauma</span></h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-base md:text-lg text-center max-w-90">
              Therapy for adults in Santa Monica, CA   Offering in-person and secure telehealth sessions</p>
          </Reveal>
          <Reveal>
            <button className="mt-8 md:mt-10 border border-moss px-6 md:px-8 py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-moss hover:text-sand cursor-pointer">
              SCHEDULE A FREE CONSULTATION &#x2192;
            </button>
          </Reveal>
        </div>
      </section>

      <section className="bg-moss text-sand flex flex-col md:flex-row justify-center items-center min-h-screen md:h-175">
        <div className="order-last md:order-first h-full w-full md:w-1/2 flex flex-col justify-between items-start">
          <div className="max-w-4xl px-10 md:pt-52">
            <Reveal><h2 className="font-medium text-4xl md:text-6xl pb-6">Tame your Restless Mind.</h2></Reveal>
            <Reveal><p className="mt-6 md:mt-8 font-regular text-base md:text-lg leading-loose">Feeling functional outside while dealing with unsolved issues can impact your relationships, confidence and safety.</p></Reveal>
            <Reveal><p className="mt-6 md:mt-8 font-regular text-base md:text-lg leading-loose">Dealing with internal turmoil can be very exhausting, I offer personalised help through proven scientific methods like CBT, EMDR and mindfulness to hep you understand yourself better.</p></Reveal>
          </div>
          <button className="bg-transparent w-full border-t border-clay/80 h-16 md:h-18 mt-10 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm md:text-md font-regular hover:bg-clay hover:text-moss cursor-pointer">SCHEDULE A FREE CONSULTATION &#x2192;</button>
        </div>
        <div className="relative top-0 h-100 pb-20 md:pb-0 md:h-full w-full md:w-1/2">
          <Reveal className="block w-full h-full">
            <div className="absolute inset-0">
              <Image
                src="/assets/calm.jpg"
                alt="flowers and candles to indicate calmness"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="bg-sand flex flex-col justify-between items-center min-h-screen md:h-200">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium pt-10 md:pt-20 md:pb-0 pb-10">My Services</h2>
        </div>
        <div className="bg-sand h-9/12 md:w-full flex flex-col md:flex-row px-8 md:px-20 py-8 md:py-8 gap-5">

          <article className="bg-clay h-140 md:h-125 w-full md:w-1/3 flex flex-col border-2 border-gray-800 md:border-none">
            <Reveal><p className="text-lg px-5 py-5 font-medium">Trauma & Stess</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Traumatic experiences can linger your growth and present lifestyle. Slow Paced approach with focus on safety and stabalization will help you feel more regulated about your lives.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/trauma4.jpg"
                    alt="an extremely stressed woman"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </article>

          <article className="bg-clay h-140 md:h-125 w-full md:w-1/3 flex flex-col border-2 border-gray-800 md:border-none">
            <Reveal><p className="text-lg px-5 py-5 font-medium">Anxiety & Panic</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Feeing on edge always can be very exhausting. Warm and Collaborative sessions with space of reflection can help you manage your anxiety and overcome it.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src="/assets/panic2.jpg"
                    alt="a man panicking"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </article>

          <article className="bg-clay h-140 md:h-125 w-full md:w-1/3 flex flex-col border-2 border-gray-800 md:border-none">
            <Reveal><p className="text-lg px-5 py-5 font-medium">Professional Burnout & High Pressure Living</p></Reveal>
            <Reveal><p className="text-sm px-5 py-3">Professionals and high-achievers can feel overwhelmed. My Therapy provides a space to slow down, reconnect with yourself and develop more sustainable ways of living and working.</p></Reveal>
            <div className="relative w-76 h-76 mx-auto mt-10 overflow-hidden rounded-full">
              <Reveal className="block w-full h-full"></Reveal>
              <Image
                src="/assets/burnout.jpg"
                alt="a working woman suffering from burnout in office"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-clay flex flex-col md:flex-row justify-center items-center min-h-screen md:h-210">
        <div className="relative h-90 md:h-full w-full md:w-1/2">
          <Reveal className="block w-full h-full">
            <div className="absolute inset-0">
              <Image
                src="/assets/support.jpg"
                alt="a hand coming for support"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="order-last md:order-first bg-moss text-clay h-full w-full md:w-1/2 flex flex-col justify-between items-start pt-10 md:pt-0">
          <div className="max-w-3xl px-8 md:px-16 md:pt-42">
            <Reveal><h2 className="font-medium text-4xl md:text-5xl max-w-150 text-center md:text-left">You don't deserve enduring any of this alone.</h2></Reveal>
            <Reveal><p className="mt-6 md:mt-8 font-regular text-base md:text-xl">Any of these could identify you: </p></Reveal>
            <Reveal><ul className="mt-6 md:mt-8 font-regular  text-base md:text-xl list-disc pl-10 flex flex-col gap-4">
              <li>Constant worry, anxiety or racing thoughts</li>
              <li>Being emotionally on edge everytime</li>
              <li>Difficulty sleeping or relaxing</li>
              <li>Feeling continously overwhelmed and exhausted</li>
              <li>Burdened by traumatic experiences from the past</li>
            </ul></Reveal>
            <Reveal><p className="mt-6 mb-6 md:mb-0 md:mt-10 font-regular text-base md:text-xl text-center md:text-left">With support and collaboration, we will understand the root causes and build a system to manage yourself better.</p></Reveal>
          </div>
          <button className="bg-transparent w-full border-t border-sand/80 h-16 md:h-18 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm
          md:text-md font-medium hover:bg-sand hover:text-moss cursor-pointer">SCHEDULE A FREE CONSULTATION &#x2192;</button>
        </div>
      </section>

      <section className="bg-clay flex flex-col md:flex-row justify-center items-center min-h-screen md:h-225 gap-25">
        <div className="order-last md:order-first w-full md:w-2/5 h-full flex flex-col justify-center items-start gap-9 mb-30 px-8 md:px-0">
          <Reveal><h2 className="text-4xl md:text-6xl md:text-left text-center">Hi, I'm Dr. Maya Reynolds, PsyD</h2></Reveal>
          <Reveal><p className="max-w-165 font-regular  text-base md:text-xl leading-8 md:text-left text-center">I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults navigating anxiety, trauma, and burnout.</p></Reveal>
          <Reveal><p className="max-w-165 font-regular  text-base md:text-xl leading-8 md:text-left text-center">I provide a warm, collaborative approach with my therapy where my clients feel respected, understood and involved in the process.</p></Reveal>
          <div className="flex justify-center items-center w-full md:pr-20">
            <button className="md:mt-10 border border-moss md:px-8 px-6 py-4 md:py-3 uppercase tracking-wide bg-transparent transition-colors duration-500 ease-in-out hover:bg-moss hover:text-sand cursor-pointer">
              SCHEDULE A FREE CONSULTATION NOW &#x2192;
            </button>
          </div>
        </div>

        <div className="relative mt-15 md:mt-0 h-76 md:h-158 w-52 md:w-110 md:mb-30">
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px]">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/assets/dr-maya.png"
                  fill
                  className="object-cover"
                  alt="portrait of Dr. Maya Reynolds"
                />
              </div>
            </Reveal>
          </div>

          <div className="absolute -bottom-20 -right-20 w-42 h-42 md:w-72 md:h-72 rounded-full overflow-hidden">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/assets/sub-image-dr-maya.jpg"
                  fill
                  className="A book from a therapist"
                  alt="circle"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand flex flex-col md:flex-row justify-center items-center h-220 md:h-250 gap-25">
        <div className="order-last md:order-first w-full md:w-2/5 h-full flex flex-col justify-start md:justify-center items-center md:items-start px-8 md:px-0 gap-12 pt-10 md:pb-0">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-medium">Our Office</h2>
          </Reveal>

          <Reveal>
            <Office />
          </Reveal>
        </div>

        <div className="relative mt-15 md:mt-0 h-176 md:h-188 w-52 md:w-130">
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px]">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/assets/office1.jpeg"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover"
                  alt="Therapy office interior"
                />
              </div>
            </Reveal>
          </div>

          <div className="absolute -bottom-20 -left-20 w-42 h-42 md:w-78 md:h-78 overflow-hidden rounded-full">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/assets/office2.jpeg"
                  fill
                  className="object-cover"
                  alt="Therapy office detail"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-moss text-sand h-120 md:h-150 flex flex-col items-center justify-center gap-10">
        <Reveal><h2 className="text-4xl md:text-5xl text-center font-medium">My Professional Background</h2></Reveal>
        <ProfBackground />
      </section>


      <section className="bg-sand flex flex-col md:flex-row justify-center items-center h-220 md:h-250 gap-25">
        <div className="relative h-176 md:h-158 w-52 md:w-110 md:mb-30 mt-15 md:mt-15">
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px]">
            <Reveal className="block w-full h-full">
              <div className="absolute inset-0">
                <Image
                  src="/assets/faq.jpg"
                  fill
                  className="object-cover"
                  alt="a light bulb depicting curiosity symbolizing FAQs"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="w-full md:w-2/5 h-full flex flex-col justify-start md:justify-center items-center md:items-start gap-12 md:mb-30 px-8 md:px-0">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-medium">FAQs</h2>
          </Reveal>

          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>


      <section className="bg-moss text-sand h-120 flex flex-col gap-8 px-5 md:px-0 justify-center text-center items-center">
        <Reveal><h2 className="text-4xl md:text-5xl font-medium">Choose Therapy. Choose Yourself.</h2></Reveal>
        <Reveal><p className="text-base md:text-xl max-w-170 text-center font-regular">Do you want to take your first step into becoming the best version of yourself? If yes, I am more than excited to begin this journey of self-healing with you.</p></Reveal>

        <button className="bg-transparent w-66 border border-white/80 h-14 text-center flex items-center justify-center tracking-wide transition-colors duration-500 ease-in-out text-sm font-medium hover:bg-clay hover:text-moss cursor-pointer">GET IN TOUCH WITH US &#x2192;</button>
      </section>

      <section className="w-full h-160 md:h-90 bg-sand text-ink flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col gap-4 md:gap-7 justify-center items-center text-center md:items-start px-6 pt-4 md:pt-0">
          <Reveal><h1 className="text-2xl md:text-5xl font-medium">
            Dr. Maya Reynolds, PsyD
          </h1></Reveal>
          <Reveal><p className="text-lg md:text-xl max-w-60">123th Street 45 W, Santa Monica, CA 90401.
          </p></Reveal>
          <Reveal><p className="text-lg md:text-xl max-w-60">drmayarey@example.com
            (555) 555-5555</p></Reveal>
        </div>
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start h-54 gap-5 md:pl-100">
          <Reveal><h1 className="font-medium text-2xl md:text-4xl">Hours</h1></Reveal>
          <div className="text-base md:text-xl max-w-40 text-center md:text-left">Monday - Friday 10am - 6pm</div>
        </div>

        <div className="flex flex-col gap-3 md:gap-5 px-6 h-54 justify-center items-center md:items-end md:justify-start">
          <Reveal><h1 className="text-2xl md:text-4xl font-medium text-center">Find</h1></Reveal>
          <span className="text-lg md:text-xl underline cursor-pointer">Home</span>
          <span className="text-lg md:text-xl underline cursor-pointer">Contact</span>
          <span className="text-lg md:text-xl underline cursor-pointer">Blog</span>
        </div>

      </section >
    </main >
  );
}
