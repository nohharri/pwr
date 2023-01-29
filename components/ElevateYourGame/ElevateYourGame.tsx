import Button from "@/components/Button/Button";
import { Fade } from "react-awesome-reveal";

export default function ElevateYourGame() {
    return (
        <Fade delay={500} triggerOnce>
            <div className="my-20 text-center">
                <h1 className="text-center">Elevate your Game</h1>
                <Button className="bg-secondary shadow border-secondary-lighter text-white">Apply Now</Button>
            </div>
        </Fade>
    )
}