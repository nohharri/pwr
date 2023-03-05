import Strings from "@/constants/Strings"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import {
    SnapItem,
} from 'react-snaplist-carousel'
import { Carousel } from "react-responsive-carousel"
import Modal from "../Modal/Modal"
import { useState } from "react"
import Button from "@/components/Button/Button"

function CarouselItem(props: { 
        testimonial:string, 
        name: string, 
        imgSrc: string,
        onOpen?: () => void,
    }) {
    const { testimonial, imgSrc, name, onOpen } = props;
    return (
        <div>
            <SnapItem snapAlign="center" className="align-center">
                <div className="box shadow">
                    <h2 className="text-center mb-4">{name}</h2>
                    <div className="flex align-center items-center align-middle w-full mx-2 flex-col md:flex-row">
                        <div className="w-[200px] flex-shrink-0">
                            <Image className="self-center align-middle mr-4 mb-4" alt="student" width={400} height={400} src={imgSrc} />
                            {onOpen && <Button className="bg-primary border-primary-light my-4 text-white" onClick={onOpen}>View Results</Button>}
                        </div>
                        <p className="text-left align-center px-4">
                            <FontAwesomeIcon icon={faQuoteLeft}/><span className="mx-2">{testimonial}</span><FontAwesomeIcon icon={faQuoteRight} />
                        </p>
                    </div>
                </div>
            </SnapItem>
        </div>
    );
}

export default function OurStudents() {
    const [isOpen, setIsOpen] = useState(false);
    const [resultsImgSrc, setResultsImgSrc] = useState("");

    const openModal = (src: string) => {
        setIsOpen(true);
        setResultsImgSrc(src);
    }

    return (
        <div className="max-w-full">
            <Fade delay={500} triggerOnce>
                <h1 className="text-center mt-16">Our <span className="text-secondary">Students</span></h1>
                <Carousel showArrows>
                    <CarouselItem 
                        testimonial={Strings.TestimonialJakeMarples} 
                        name="Jake" 
                        imgSrc="/jake_marples.png" 
                        onOpen={() => openModal("/jake_results.png")}
                    />
                    <CarouselItem 
                        testimonial={Strings.TestimonialGrant} 
                        name="Grant" 
                        imgSrc="/grant.png"
                        onOpen={() => openModal("/grant_results.png")}
                    /> 
                    <CarouselItem 
                        testimonial={Strings.TestimonialMathias} 
                        name="Mathias" 
                        imgSrc="/mathias.png" 
                        onOpen={() => openModal("/mathias_results.png")}
                    />    
                </Carousel>
            </Fade>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Image src={resultsImgSrc} alt="Player results" width={600} height={600} className="w-[600px]"></Image>
            </Modal>
        </div>
    )
}