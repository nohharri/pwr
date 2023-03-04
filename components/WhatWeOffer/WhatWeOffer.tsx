
import { Fade } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { 
    faPersonChalkboard,
    faPerson,
    faPeopleGroup,
    faPaperPlane,
    faLineChart,
    faPeopleRoof,
    faBook,
    faUsersRectangle
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function WhatWeOfferItem(props: { 
    icon: IconProp,
    text: string,
}) {
    const { icon, text } = props;
    return (
        <div className="mx-8 text-center w-1/4 md:w-1/6">
            <FontAwesomeIcon className="dark:text-primary-lighter" icon={icon} fontSize={100} /><p className="my-4 text-center">{text}</p>
        </div>
    );
}

export default function WhatWeOffer() {
    return (
        <Fade delay={500} triggerOnce>
            <a id="WhatWeOffer">
                <h1 className="text-center mt-20 mb-8"><span className="text-secondary">What</span> We Offer</h1> 
            </a>
            <div className="box shadow flex flex-col">
                <Fade cascade triggerOnce damping={0.2}>
                    <div className="flex flex-wrap justify-center">
                        <WhatWeOfferItem icon={faPersonChalkboard} text="1:1 Coaching" />
                        <WhatWeOfferItem icon={faPerson} text="Additional one-on-ones based on volume thresholds" />
                        <WhatWeOfferItem icon={faPeopleGroup} text="2 group coaching sessions per week" />
                        <WhatWeOfferItem icon={faYoutube} text="4 additional training videos per month" />
                        <WhatWeOfferItem icon={faUsersRectangle} text="Weekly streams featuring a head coach playing mid/high Stakes" />
                        <WhatWeOfferItem icon={faBook} text="Access to our video library, exclusive PDF's, and past training sessions" />
                        <WhatWeOfferItem icon={faLineChart} text="GTO preflop ranges/ PIO solver parameters/ HM2 /PT4 HUDS" />
                        <WhatWeOfferItem icon={faPeopleRoof} text="Community of like-minded poker players" />
                    </div>
                </Fade>
            </div>
        </Fade>
    )
}