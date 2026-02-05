"use client"
import { useState } from "react"

const officeQues = [
    {
        q: "Where is your office located?",
        a: "123th Street 45 W, Santa Monica, CA 90401. A quiet, private space designed to feel calm and welcoming."
    },
    {
        q: "What is the office environment like?",
        a: "The office is intentionally designed to be grounding and uncluttered, with natural light and comfortable seating. Many clients share that the space itself helps them feel more at ease as soon as they arrive."
    },
    {
        q: "Do you offer in-person sessions?",
        a: "Yes. I offer in-person therapy at my Santa Monica office as well as secure telehealth sessions for clients located throughout California."
    },
    {

        q: "What should I expect when I arrive?",
        a: "You’ll be welcomed into a calm, supportive environment where sessions move at a comfortable pace. My goal is for you to feel respected, supported, and at ease from the moment you arrive.",
    },
];

export default function Office() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">

            {officeQues.map((item, i) => (
                <div key={i} className="border-t border-moss/50">

                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-start gap-5 py-2 md:py-6"
                    >
                        {/* for Plus and Cross */}
                        <span
                            className={` text-lg md:text-4xl transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            &#43;
                        </span>
                        <span className="text-base md:text-3xl font-regular">{item.q}</span>

                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-600 ${open === i ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="pb-6 pr-20 text-xs md:text-lg">
                            {item.a}
                        </p>
                    </div>

                </div>
            ))}
            <div className="border-t border-moss/50" />

        </div>
    );
}
