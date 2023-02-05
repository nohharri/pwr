import Button from "@/components/Button/Button";
import { Fade } from "react-awesome-reveal";
import Strings from "@/constants/Strings";

export default function ElevateYourGame() {
    return (
        <Fade delay={500} triggerOnce>
            <div className="my-20 text-center">
                <h1 className="text-center">Elevate your Game</h1>
                <Button onClick={() => { window.location.href = Strings.Typeform } } className="bg-secondary shadow border-secondary-lighter text-white">
                    Apply Now
                </Button>
            </div>
        </Fade>
    )
}