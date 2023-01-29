import Image from "next/image";

export default function CoachCard(props: {
    coachName: string,
    imgSrc: string,
    accolades?: string, 
}) {
    const { coachName, imgSrc } = props;
    return (
        <div className="box shadow flex-1 m-2">
            <h2 className="text-center h-24">{coachName}</h2>
            <Image className="text-center" width={200} height={200} src={imgSrc} alt="profile-pics" />
            <h3 className="my-4">Results since 2020</h3>
            <p>~7bb win rate</p>
        </div>
    );
}