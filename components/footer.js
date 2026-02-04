import Link from "next/link";

export default function Footer() {
    return (
        <section className="w-full h-90 bg-[#fbf6f1] text-[#223614] flex flex-row justify-between items-center">
            <div className="flex flex-col gap-7 justify-center items-start px-10">
                <h1 className="text-5xl">
                    Lilac Template
                </h1>
                <p className="text-xl max-w-60">123 Example Road
                    Minneapolis, MN
                </p>
                <p className="text-xl max-w-60">email@example.com
                    (555) 555-5555</p>
            </div>
            <div className="flex flex-col justify-start h-54 gap-7 pl-100">
                <h1 className="text-4xl">Hours</h1>
                <span className="text-xl max-w-40">Monday - Friday 10am - 6pm</span>
            </div>

            <div className="flex flex-col gap-5 px-10 h-54">
                <h1 className="text-4xl">Find</h1>
                <Link href="/" className="text-xl underline">Home</Link>
                <Link href="/contact" className="text-xl underline">Contact</Link>
                <Link href="/blog" className="text-xl underline">Blog</Link>
            </div>

        </section >
    )
}