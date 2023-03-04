import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing/Landing'
import MeetCoaches from '@/components/MeetCoaches/MeetCoaches'
import WhatWeOffer from '@/components/WhatWeOffer/WhatWeOffer'
import ElevateYourGame from '@/components/ElevateYourGame/ElevateYourGame'
import Footer from '@/components/Footer/Footer'
import OurStudents from '@/components/OurStudents/OurStudents'
import OurCommunity from '@/components/OurCommunity/OurCommunity'
import SelectionProcess from '@/components/SelectionProcess/SelectionProcess'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>PWR - Poker with Riske</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Landing />
            <MeetCoaches />
            <OurCommunity />
            <OurStudents />
            <WhatWeOffer />
            <SelectionProcess />
            <ElevateYourGame />
        </>
    )
}
