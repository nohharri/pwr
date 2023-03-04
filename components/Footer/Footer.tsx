import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="flex align-middle bg-primary-dark p-20 justify-center flex-col text-center self-center items-center px-4">
                <Image className="filter-white my-4" width={60} height={60} alt="logo" src="/logo.svg" />
                <div className="text-white flex [&>div]:mx-1">
                    <div><Link href="/terms-and-conditions">Terms and Conditions | </Link></div>
                    <div><Link href="/privacy-policy">Privacy Policy |</Link></div>
                    <div>© Poker with Riske. Copyright 2021. All rights reserved.</div>
                </div>
            </div>
        </div>
    )
}