import CoachCard from "@/components/CoachCard/CoachCard";
import Image from "next/image";
import { useState } from "react";
import { Fade } from 'react-awesome-reveal';
import { useTransition, animated, AnimatedProps, useSpringRef, useSpring } from "@react-spring/web";
import Modal from "@/components/Modal/Modal";
import Strings from "@/constants/Strings";

type Coach = {
    coachName: string,
    lastName: string,
    imgSrc: string,
    resultsSince: number,
    accolades: Array<string>,
    summary: string,
    resultImgSrc: string,
}

const Coaches: Array<Coach> = [
    {
        coachName: "Ryan",
        lastName: "Riske",
        imgSrc: "/ryan_riske.png",
        resultsSince: 2020,
        accolades: ["~77bb win rate", "Avg Stake 1000NL"],
        summary: Strings.RyanRiskeSummary,
        resultImgSrc: "/ryan_results.png",
    },
    {
        coachName: "Andrew",
        lastName: "Ivers",
        imgSrc: "/andrew_ivers.png",
        resultsSince: 2022,
        accolades: ["~6bb in rate", "Avg Stake 1000NL"],
        summary: Strings.AndrewIversSummary,
        resultImgSrc: "/andrew_results.png",
    },
    {
        coachName: "Connor",
        lastName: "Armstrong",
        imgSrc: "/connor_armstrong.png",
        resultsSince: 2020,
        accolades: ["~77bb win rate", "Avg Stake 1000NL"],
        summary: Strings.ConnorArmstrongSummary,
        resultImgSrc: "/connor_results.png",
    },
];

export default function MeetCoaches() {

    const [currentCoach, setCoach] = useState<Coach>();
    const [isOpen, setIsOpen] = useState(false);

    const [springs, api] = useSpring(() => ({ 
        from: { opacity: 0 },
        to: { opacity: 1 },
    }));

    const onCoachClick = (coach: Coach) => {
        setCoach(coach);
        setIsOpen(!isOpen);
    }

    return (
        <div>
        <Fade delay={500} triggerOnce>
            <h1 className="text-center">Meet your <span className="text-secondary">Coaches</span></h1>
            <h3 className="text-center mb-8">Discover our coaches&apos; journeys.</h3>
            <div className="flex flex-col sm:flex-row">
                {Coaches.map((val, idx) => (
                  <CoachCard
                    key={`coach-${idx}`}
                    coachName={val.coachName}
                    lastName={val.lastName}
                    imgSrc={val.imgSrc}
                    resultsSince={val.resultsSince}
                    accolades={val.accolades}
                    springs={springs}
                    onClick={() => onCoachClick(val)}
                   />  
                ))}
            </div>
        </Fade>
        <Modal 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}>
            {currentCoach && 
            (
                <div>
                    <h2 className="text-center mb-4">{currentCoach.coachName}</h2>
                <div className="flex items-center justify-center">
                    <Image alt="coach" src={currentCoach.imgSrc} width={200} height={200} className="mr-4" />
                    <Image alt="results" src={currentCoach.resultImgSrc} width={300} height={300} className="rounded-xl" />
                </div>
                <p className="mt-4">{currentCoach.summary}</p>
                </div>
            )
            }
        </Modal>
        </div>
    )
}