import { faFacebook, faInstagram, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Socials() {
    return (
        <div className="flex gap-2 text-xl">
            <Link href="https://www.youtube.com/PokerWithRiske"><FontAwesomeIcon className="text-red-500" href="" icon={faYoutube} /></Link>
            <Link href="https://www.instagram.com/pokerwithriske/?hl=en"><FontAwesomeIcon className="text-pink-600" icon={faInstagram} /></Link>
            <Link href="https://twitter.com/pokerwithriske"><FontAwesomeIcon className="text-blue-400" icon={faTwitter} /></Link>
            <Link href="https://www.facebook.com/pokerwithriske/"><FontAwesomeIcon className="text-blue-600" icon={faFacebook} /></Link>
            <Link href="https://www.twitch.tv/pokerwithriske"><FontAwesomeIcon className="text-purple-500" icon={faTwitch} /></Link>
        </div>
    )
}