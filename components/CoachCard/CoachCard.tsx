import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { animated } from "@react-spring/web";

export default function CoachCard(props: {
    coachName: string,
    lastName: string,
    imgSrc: string,
    resultsSince: number,
    accolades?: Array<string>,
    springs?: any,
    onClick?: () => void,
}) {
    const { 
        coachName, 
        imgSrc, 
        resultsSince, 
        accolades, 
        lastName,
        springs,
        onClick,
    } = props;
    return (
        <animated.div style={{...springs}} onClick={onClick} 
            className="flex flex-col box shadow w-full my-2 sm:m-2 items-center hover:cursor-pointer transition-all hover:scale-105">
            <h2 className="text-3xl lg:text-4xl text-center">{coachName}</h2>
            <h2 className="mb-4 text-3xl lg:text-4xl">{lastName}</h2>
            <Image width={200} height={200} src={imgSrc} alt="profile-pics" />
            <h3 className="my-4">Results since {resultsSince}</h3>
            {accolades && accolades.map((accolade, idx) => <p key={`${accolade}-${idx}`}><FontAwesomeIcon icon={faTrophy} className="mr-4" />{accolade}</p>)}
        </animated.div>
    );
}