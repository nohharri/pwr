
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { 
    faPersonChalkboard,
    faPerson,
    faPeopleGroup,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function WhatWeOfferItem(props: { 
    icon: IconProp,
    text: string,
}) {
    const { icon, text } = props;
    return (
        <div className="mx-8 text-center">
            <FontAwesomeIcon icon={icon} fontSize={100} /><p className="text-center m-4">{text}</p>
        </div>
    );
}

export default function WhatWeOffer() {
    return (
        <Fade delay={500} triggerOnce>
            <h1 className="text-center mt-20 mb-8"><span className="text-secondary">What</span> We Offer</h1> 
            <div className="box shadow flex flex-col">
                <div className="flex">
                    <Fade cascade triggerOnce damping={0.2}>
                        <WhatWeOfferItem icon={faPersonChalkboard} text="1:1 Coaching" />
                        <WhatWeOfferItem icon={faPerson} text="Additional one-on-ones based on volume thresholds" />
                        <WhatWeOfferItem icon={faPeopleGroup} text="2 group coaching sessions per week" />
                        <WhatWeOfferItem icon={faYoutube} text="4 additional training videos per month" />
                    </Fade>
                </div>
                <div className="flex-0 flex">
                    <Fade cascade triggerOnce delay={500} damping={0.2}>
                        <WhatWeOfferItem icon={faPersonChalkboard} text="1:1 Coaching" />
                        <WhatWeOfferItem icon={faPerson} text="Additional one-on-ones based on volume thresholds" />
                        <WhatWeOfferItem icon={faPeopleGroup} text="2 group coaching sessions per week" />
                        <WhatWeOfferItem icon={faYoutube} text="4 additional training videos per month" />
                    </Fade>
                </div>
            </div>
        </Fade>
    )
}