import CoachCard from "@/components/CoachCard/CoachCard";
import { Fade } from 'react-awesome-reveal';

export default function MeetCoaches() {
    return (
        <Fade delay={500} triggerOnce>
            <h1 className="text-center">Meet your <span className="text-secondary">Coaches</span></h1>
            <h3 className="text-center mb-8">Discover our coaches&apos; journeys.</h3>
            <div className="flex">
                <CoachCard coachName="Ryan Riske" imgSrc="/ryan_riske.png" />
                <CoachCard coachName="Andrew Ivers" imgSrc="/andrew_ivers.png" />
                <CoachCard coachName="Connor Armstrong" imgSrc="/connor_armstrong.png" />
            </div>
        </Fade>
    )
}