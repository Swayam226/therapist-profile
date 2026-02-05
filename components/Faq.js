"use client"
import { useState } from "react"

const faqs = [
    {
        q: "Is this for me?",
        a: "Yes - if you are dealing with chronic stress, anxiety, overthinking, trauma or professional burnout due to work environment pressure then my therapy might be the support you thought you wanted."
    },
    {
        q: "What is your approach to therapy?",
        a: "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I also integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques."
    },
    {
        q: "What is the price range?",
        a: "Nil, for the first session. For a detailed pricing plans, please give us a call on the number mentioned at the contact section below."
    },
    {

        q: "Do you offer Telehealth sessions?",
        a: "Yes. I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located in California.",
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
                        className="w-full flex items-center justify-start gap-5 py-2 md:py-6"
                    >
                        {/* for Plus and Cross */}
                        <span
                            className={`text-lg md:text-4xl transition-transform duration-300 ${open === i ? "rotate-45" : ""
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
                        <p className="pb-6 pr-20 text-base md:text-lg">
                            {item.a}
                        </p>
                    </div>

                </div>
            ))}
            <div className="border-t border-moss/50" />

        </div>
    );
}
