import Link from "next/link"

export default function Header() {
    return (
        <nav className="w-full overflow-x-hidden h-18 bg-[#fbf6f1] text-[#223614] flex flex-row justify-between items-center">
            <span className="pl-14 text-4xl font-medium"><Link href="/">Lilac Template</Link></span>
            <div className="pr-16 text-xl flex flex-row gap-10">
                <span><Link href="/blog">Blog</Link></span>
                <span><Link href="/contact">Contact</Link></span>
            </div>
        </nav >
    )
}