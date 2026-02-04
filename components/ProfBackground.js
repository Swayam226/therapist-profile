"use client"
import { useState } from "react"
import Reveal from "./Reveal";

const history = [
    {
        q: "Education",
        a: "Yes — I accept most major insurance providers. Reach out and we’ll confirm your coverage."
    },
    {
        q: "Licensure",
        a: "Session rates vary depending on length and type. Contact me and I’ll share full details."
    },
    {
        q: "Certifications",
        a: "Availability changes regularly. Please get in touch for current openings."
    },
];

export default function ProfBackground() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-1/2">

            {history.map((item, i) => (
                <div key={i} className="border-t border-[#223614]/50">

                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-start gap-5 py-4"
                    >
                        {/* for Plus and Cross */}
                        <span
                            className={`text-4xl transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            +
                        </span>
                        <Reveal><span className="text-3xl font-regular">{item.q}</span></Reveal>

                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
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
