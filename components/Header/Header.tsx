// @ts-nocheck

import Image from 'next/image';
import { useTheme } from 'next-themes';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex align-middle items-center h-header m-auto px-4 justify-between">
            <h1><Image className="dark:filter-white" width={60} height={60} alt="logo" src="/logo.svg" /></h1>
            <Toggle 
                checked={theme === 'light'}
                icons={{
                    unchecked: <FontAwesomeIcon fontSize={12} icon={faSun} />,
                    checked: <FontAwesomeIcon fontSize={12} icon={faMoon} />,
                }}
                onChange={(e: any) => setTheme(e.target.checked ? 'light' : 'dark') } />
        </div>
    );
}