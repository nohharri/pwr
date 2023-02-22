import Strings from "@/constants/Strings";
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {
    SnapList,
    SnapItem,
  } from 'react-snaplist-carousel';

function CarouselItem(props: { testimonial:string, name: string, imgSrc: string }) {
    const { testimonial, imgSrc, name } = props;
    return (
        <SnapItem snapAlign="center" className="align-center" width="calc(100% - 20px)">
            <div className="box shadow">
            <h2 className="text-center mb-4">{name}</h2>
            <div className="flex align-center items-center align-middle w-full mx-2 flex-col md:flex-row">
                <Image className="self-center align-middle mr-4 mb-4" alt="student" width={200} height={200} src={imgSrc} />
                <p className="text-left align-center">
                    <FontAwesomeIcon icon={faQuoteLeft}/><span className="mx-2">{testimonial}</span><FontAwesomeIcon icon={faQuoteRight} />
                </p>
            </div>
            </div>
        </SnapItem>
    );
}

export default function OurStudents() {
    return (
        <div className="max-w-full">
            <Fade delay={500} triggerOnce>
                <h1 className="text-center mt-16">Our <span className="text-secondary">Students</span></h1>
                <SnapList direction="horizontal" scrollPadding={{ left: "20px", right: "20px" }} className="w-full">
                    <CarouselItem testimonial={Strings.TestimonialJakeMarples} name="Jake Marples" imgSrc="/jake_marples.png" />
                    <CarouselItem testimonial={Strings.TestimonialGrant} name="Grant" imgSrc="/grant.png" /> 
                    <CarouselItem testimonial={Strings.TestimonialMathias} name="Mathias" imgSrc="/mathias.png" />
                </SnapList>
            </Fade>
        </div>
    )
}