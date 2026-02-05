"use client"
import { useState } from "react"
import Reveal from "./Reveal";

const history = [
    {
        q: "Profession",
        a: "Licensed Clinical Psychologist (PsyD), providing therapy for adults in Santa Monica, California, with a focus on anxiety, trauma, and burnout."
    },
    {
        q: "Care Approach",
        a: "Evidence-Based & Trauma-Informed Care, trained in CBT, EMDR, mindfulness-based practices, and body-oriented techniques to support both emotional insight and nervous system regulation."
    },
    {
        q: "Session Type",
        a: "Collaborative, Client-Centered Approach, sessions are paced with care and grounded in safety, respect, and active collaboration—supporting long-term growth, resilience, and self-understanding."
    },
];

export default function ProfBackground() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full px-8 md:px-0 md:w-1/2">

            {history.map((item, i) => (
                <div key={i} className="border-t border-ink/50">

                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-start gap-5 py-2 md:py-4"
                    >
                        {/* for Plus and Cross */}
                        <span
                            className={`text-lg md:text-4xl transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            +
                        </span>
                        <Reveal><span className="text-base md:text-3xl font-regular">{item.q}</span></Reveal>

                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-600 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="pb-6 pr-20 text-lg">
                            {item.a}
                        </p>
                    </div>

                </div>
            ))}
            <div className="border-t border-[#223614]/50" />

        </div>
    );
}
