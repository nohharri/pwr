// @ts-nocheck

import Image from 'next/image';
import { useTheme } from 'next-themes';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Link from 'next/link';



export default function Header() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme((theme && theme === 'light') ? 'light' : 'dark');
    });

    return (
        <div className="flex align-middle items-center h-header m-auto px-4 justify-between">
            <div className="flex">
                <Image className="dark:filter-white" width={60} height={60} alt="logo" src="/logo.svg" />
                <Link href="/"><h1 className="whitespace-nowrap ml-2">PWR</h1></Link>
            </div>
            <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'dark' ? 
                    <FontAwesomeIcon fontSize={20} icon={faSun} /> :
                    <FontAwesomeIcon fontSize={20} icon={faMoon} />
                }
            </div>
        </div>
    );
}