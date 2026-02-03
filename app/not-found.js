import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-white text-lg">
            Sorry there is nothing here
            <Link href="/">Go back home</Link>
        </div>
    )
}