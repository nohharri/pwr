import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { faX, faXRay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Modal(props: { isOpen: boolean, children?: any, onClose: () => void }) {
    const { 
        isOpen,
        children,
        onClose,
     } = props;

     const style = useSpring({ opacity: isOpen ? 1 : 0, from: { opacity: 0 }});

    return isOpen ? (
        <div className="modal-bg" onClick={onClose}>
            <animated.div  className="modal shadow" style={style}>
                <div onClick={onClose}><FontAwesomeIcon icon={faX} className="text-primary dark:text-white text-lg" /></div>
                {children}
            </animated.div>
        </div>
        ) : <div></div>;
}