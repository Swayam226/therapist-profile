"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
// import Reveal from "./Reveal";


export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setlastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currScrollY = window.scrollY;

            if (currScrollY > lastScrollY && currScrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setlastScrollY(currScrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY])

    return (
        <nav className={`w-full overflow-x-hidden h-18 bg-transparent text-[#223614] flex flex-row justify-between items-center fixed top-0 left-0 z-50 transition-transform duration-500 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <span className="pl-14 text-4xl font-medium"><Link href="/">Lilac Template</Link></span>
            <div className="pr-16 text-xl flex flex-row gap-10">
                <span><Link href="/blog">Blog</Link></span>
                <span><Link href="/contact">Contact</Link></span>
            </div>
        </nav >
    )
}