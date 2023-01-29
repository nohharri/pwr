import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function CoachCard(props: {
    coachName: string,
    imgSrc: string,
    resultsSince: number,
    accolades?: Array<string>,
}) {
    const { coachName, imgSrc, resultsSince, accolades } = props;
    return (
        <div className="flex flex-col box shadow w-full my-2 sm:m-2 items-center">
            <h2 className="text-3xl lg:text-4xl text-center h-24">{coachName}</h2>
            <Image width={200} height={200} src={imgSrc} alt="profile-pics" />
            <h3 className="my-4">Results since {resultsSince}</h3>
            {accolades && accolades.map((accolade, idx) => <p key={`${accolade}-${idx}`}><FontAwesomeIcon icon={faTrophy} className="mr-4" />{accolade}</p>)}
        </div>
    );
}