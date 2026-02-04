import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-surface text-brand h-60 pt-10 flex flex-col gap-5 justify-around items-center">
            <div className="flex flex-col text-lg justify-center items-center gap-7">
                <div className="flex flex-row gap-5">
                    <Link className="underline" href="/privacy-policy">Privacy & Cookies Policy</Link>
                    <Link className="underline" href="/good-faith-estimate">Good Faith Estimate</Link>
                    <Link className="underline" href="/terms-conditions">Website Terms & Conditions</Link>
                    <Link className="underline" href="/disclaimer">Disclaimer</Link>
                </div>
                <p>Website Template Credits: <Link className="underline" href="https://www.gobloomcreative.com/">Go Bloom Creative</Link></p>
            </div>
            <div>
                <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
            </div>
        </footer>
    )
}