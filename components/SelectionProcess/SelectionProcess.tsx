import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/Strings";

const ApplicationProcessItem = (props: { icon: any, text: string }) => {
    const { icon, text } = props;
    return (
        <div className="flex flex-col">
            <FontAwesomeIcon icon={icon} size="4x" className="my-2" />
            <p>{text}</p>
        </div>
    );
};

export default function SelectionProcess() {
    return (
        <div>
            <h1 className="text-center my-10"><span className="text-secondary">Selection</span> Process</h1>
            <div className="box shadow">
                <p className="text-center m-8">{Strings.SelectionProcessText}</p>
                <div className="flex justify-center gap-6 flex-col sm:flex-row text-center">
                    <ApplicationProcessItem icon={faNewspaper} text="1. Application Review" />
                    <ApplicationProcessItem icon={faCommentDots} text="2. Interview with our Coaches" />
                    <ApplicationProcessItem icon={faFeather} text="3. Contract Signature" />
                </div>
            </div>
        </div>
    )
}