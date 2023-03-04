import Strings from "@/constants/Strings";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";

export default function Landing() {

    const [springs] = useSpring(() => ({ 
        config: {
            duration: 1000,
        },
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
    }));

    return (
        <div className="flex m-auto align-middle items-center max-h-xl sm:h-[calc(100vh-80px)]">
            <div>
                <div className="box shadow">
                    <h1><span className="text-secondary">Simplify,</span> don&apos;t sacrifice.</h1>
                    <div className="flex self-center md:flex-row flex-col">
                        <p className="my-8">{Strings.Landing}</p>
                        <animated.div style={{...springs}} className="self-center flex-shrink-0 opacity-0 m-4">
                            <Image className="self-center" alt="pwr" width={400} height={400} src="/pwr.png" />
                        </animated.div>
                    </div>
                    <div className="flex items-center align-middle">
                        <Button onClick={() => { window.location.href = Strings.Typeform }} className="bg-secondary border-secondary-lighter shadow mr-4 text-white">
                            {Strings.ApplyNow}
                        </Button>
                        <Button onClick={() => window.location.href = "#WhatWeOffer" } className="bg-primary border-primary-light shadow text-white">{Strings.WhatWeOffer}</Button>
                    </div>
                </div>
            </div>
        </div>
    );  
}