import Strings from "@/constants/Strings";
import Button from "@/components/Button/Button";

export default function Landing() {
    return (
        <div className="flex m-auto align-middle items-center max-h-xl sm:h-[calc(100vh-80px)]">
            <div>
                <div className="box shadow">
                    <h1><span className="text-secondary">Simplify,</span> don&apos;t sacrifice.</h1>
                    <p className="my-8">{Strings.Landing}</p>
                    <div className="flex">
                    <Button className="bg-secondary border-secondary-lighter shadow mr-4 text-white">
                        {Strings.ApplyNow}
                    </Button>
                    <Button className="bg-primary border-primary-light shadow text-white">{Strings.WhatWeOffer}</Button>
                    </div>
                </div>
            </div>
        </div>
    );  
}