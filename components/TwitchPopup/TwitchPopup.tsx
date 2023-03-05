import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TwitchPlayer } from "react-twitch-embed"
import { animated, useSpring } from "@react-spring/web"
import { useState } from "react"

const BUTTON_CLOSED_STYLE = ""

export default function TwitchPopup() {

    // const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    // const [springs, api] = useSpring(() => ({ 
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    // }));

    // const closePlayer = () => {
        
    // }

    // return (
    //     <animated.div style={{}} className="fixed bottom-8 right-8 rounded-2xl border overflow-hidden">
    //         <TwitchPlayer width={300} height={200} muted channel="pokerWithRiske" />
    //         <FontAwesomeIcon onClick={closePlayer} className="absolute top-4 right-4" icon={faX} />
    //     </animated.div>
    // )
}