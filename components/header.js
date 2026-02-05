"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currScrollY = window.scrollY;

            if (currScrollY > lastScrollY && currScrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`w-screen overflow-x-hidden h-18 bg-transparent text-ink flex flex-row justify-between items-center fixed top-0 left-0 z-50 transition-transform duration-700 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"
                    }`}
            >
                {/* Mobile burger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden pl-4 text-3xl"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Logo */}
                <span className="pl-20 md:pl-14 text-lg md:text-3xl font-medium">
                    <Link href="/">Dr. Maya Reynolds, PsyD</Link>
                </span>

                {/* Desktop links */}
                <div className="hidden md:flex pr-16 text-xl flex-row gap-10">
                    <span>
                        <Link href="/blog">Blog</Link>
                    </span>
                    <span>
                        <Link href="/contact">Contact</Link>
                    </span>
                </div>

                {/* Spacer for mobile right side */}
                <div className="md:hidden w-10" />
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed top-18 left-0 w-screen bg-sand text-ink z-40 transition-all duration-500 ease-in-out md:hidden ${menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col gap-6 py-8 px-6 text-xl border-t border-ink/10">
                    <Link onClick={() => setMenuOpen(false)} href="/blog">
                        Blog
                    </Link>
                    <Link onClick={() => setMenuOpen(false)} href="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
