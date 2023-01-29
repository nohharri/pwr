import CoachCard from "@/components/CoachCard/CoachCard";
import { Fade } from 'react-awesome-reveal';

export default function MeetCoaches() {
    return (
        <Fade delay={500} triggerOnce>
            <h1 className="text-center">Meet your <span className="text-secondary">Coaches</span></h1>
            <h3 className="text-center mb-8">Discover our coaches&apos; journeys.</h3>
            <div className="flex flex-col sm:flex-row">
                <CoachCard 
                    coachName="Ryan Riske" 
                    imgSrc="/ryan_riske.png"
                    resultsSince={2020}
                    accolades={["~77bb win rate", "Avg Stake 1000NL"]}
                />
                <CoachCard 
                    coachName="Andrew Ivers" 
                    imgSrc="/andrew_ivers.png" 
                    resultsSince={2022}
                    accolades={["~6bb in rate", "Avg Stake 1000NL"]}
                />
                <CoachCard 
                    coachName="Connor Armstrong" 
                    imgSrc="/connor_armstrong.png" 
                    resultsSince={2020} 
                    accolades={["~77bb win rate", "Avg Stake 1000NL"]}
                />
            </div>
        </Fade>
    )
}