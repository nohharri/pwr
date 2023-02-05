import Strings from "@/constants/Strings";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function OurCommunity() {
    return (
    <Fade delay={500} triggerOnce>
        <h1 className="text-center">Our <span className="text-secondary">Community</span></h1>
        <div className="box shadow flex flex-col md:flex-row-reverse items-center my-8">
            <div className="m-8"><Image alt="computer" src="/computer.png" width={400} height={400} /></div>
            <div className="md:flex-1">{Strings.OurCommunityText}</div>
        </div>
    </Fade>
    );
}