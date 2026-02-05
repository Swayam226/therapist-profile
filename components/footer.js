import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-clay text-ink h-60 pt-10 flex flex-col gap-5 justify-around items-center">
            <div className="flex flex-col text-lg justify-center items-center gap-7">
                <div className="flex flex-row gap-5">
                    <Link className="underline" href="/privacy-policy">Privacy & Cookies Policy</Link>
                    <Link className="underline" href="/good-faith-estimate">Good Faith Estimate</Link>
                    <Link className="underline" href="/terms-conditions">Website Terms & Conditions</Link>
                    <Link className="underline" href="/disclaimer">Disclaimer</Link>
                </div>
                <p>Webpage Credits: <Link className="underline" href="https://www.github.com/Swayam226">Swayam Kumar</Link></p>
            </div>
            <div>
                <p>All Rights Reserved © 2026 Dr. Maya Reynolds</p>
            </div>
        </footer>
    )
}