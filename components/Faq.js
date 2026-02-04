"use client"
import { useState } from "react"

const faqs = [
    {
        q: "Do you take insurance?",
        a: "Yes — I accept most major insurance providers. Reach out and we’ll confirm your coverage."
    },
    {
        q: "What are your rates?",
        a: "Session rates vary depending on length and type. Contact me and I’ll share full details."
    },
    {
        q: "Do you have any openings?",
        a: "Availability changes regularly. Please get in touch for current openings."
    },
];

export default function Faq() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">

            {faqs.map((item, i) => (
                <div key={i} className="border-t border-moss/50">

                    <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-start gap-5 py-6"
                    >
                        {/* for Plus and Cross */}
                        <span
                            className={`text-4xl transition-transform duration-300 ${open === i ? "rotate-45" : ""
                                }`}
                        >
                            &#43;
                        </span>
                        <span className="text-3xl font-medium">{item.q}</span>

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
            <div className="border-t border-moss/50" />

        </div>
    );
}
